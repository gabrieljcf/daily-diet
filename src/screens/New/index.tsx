import { Header } from "@components/Header";
import { Container, FieldsContainer, SplitContainer } from "./styles";
import { Content } from "@components/Content";
import { Input } from "@components/Input";
import { useEffect, useRef, useState } from "react";
import { Alert, Platform, TextInput } from "react-native";
import { DietButton } from "@components/DietButton";
import { Button } from "@components/Button";
import { Label } from "@components/Label";
import { createMeal } from "@storage/meal/create";
import { useNavigation, useRoute } from "@react-navigation/native";
import { findOneMeal } from "@storage/meal/findOne";
import { updateMeal } from "@storage/meal/update";
import { SafeAreaView } from "react-native-safe-area-context";
import { Loading } from "@components/Loading";

type RouteParams = {
  id: string;
};

export function Register() {
  const route = useRoute();
  const { id } = route.params as RouteParams;
  const [isInDiet, setIsInDiet] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const nameInput = useRef<TextInput>(null);

  async function handleRegister() {
    try {
      setIsLoading(true);
      const inDiet = isInDiet === "yes";
      const input = {
        name,
        description,
        date,
        hour,
        diet: inDiet,
      };
      if (!id) {
        await createMeal(input);
      } else {
        await updateMeal(id, input);
      }
      navigation.navigate("feedback", { inDiet });
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Não foi possível criar a refeição.");
    } finally {
      setIsLoading(false);
    }
  }

  async function fetchOneMeal() {
    try {
      setIsLoading(true);
      const data = await findOneMeal(id);
      setName(data.name);
      setDescription(data.description);
      setDate(data.date);
      setHour(data.hour);
      setIsInDiet(data.diet ? "yes" : "no");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar a refeição.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (id) fetchOneMeal();
    nameInput.current?.focus();
  }, []);
  return (
    <Container>
      <Header action={!id ? "Nova refeição" : "Editar refeição"} />
      <Content
        enabled={Platform.OS === "ios" ? true : false}
        behavior="padding"
      >
        {isLoading ? (
          <Loading />
        ) : (
          <FieldsContainer>
            <Input
              label="Nome"
              inputRef={nameInput}
              onChangeText={setName}
              value={name}
            />
            <Input
              label="Descrição"
              multiline
              numberOfLines={4}
              onChangeText={setDescription}
              value={description}
            />
            <SplitContainer>
              <Input label="Data" split onChangeText={setDate} value={date} />
              <Input label="Hora" split onChangeText={setHour} value={hour} />
            </SplitContainer>
            <Label text="Está dentro da dieta?" />
            <SplitContainer>
              <DietButton
                title="Sim"
                type={isInDiet === "yes" ? "PRIMARY" : "DEFAULT"}
                badgeType="PRIMARY"
                onPress={() => setIsInDiet("yes")}
              />
              <DietButton
                title="Não"
                type={isInDiet === "no" ? "SECONDARY" : "DEFAULT"}
                badgeType="SECONDARY"
                onPress={() => setIsInDiet("no")}
              />
            </SplitContainer>
          </FieldsContainer>
        )}
        <Button
          title={!id ? "Cadastrar Refeição" : "Salvar alteracões"}
          full
          onPress={handleRegister}
        />
      </Content>
    </Container>
  );
}
