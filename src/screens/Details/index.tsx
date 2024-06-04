import { useEffect, useState } from "react";
import { Header } from "@components/Header";
import {
  Container,
  Text,
  Name,
  Tag,
  Badge,
  Title,
  InfoContainer,
} from "./style";
import { Content } from "@components/Content";
import { Label } from "@components/Label";
import { Button } from "@components/Button";
import { DeleteMealModal } from "@components/DeleteMealModal";
import { useNavigation, useRoute } from "@react-navigation/native";
import { findOneMeal } from "@storage/meal/findOne";
import { deleteMeal } from "@storage/meal/delete";
import { Alert } from "react-native";
import { Loading } from "@components/Loading";
import { Meal } from "@storage/meal/Meal";

type RouteParams = {
  id: string;
};

export function Details() {
  const route = useRoute();
  const navigation = useNavigation();
  const [meal, setMeal] = useState<Meal>();
  const { id } = route.params as RouteParams;
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function onCloseModal() {
    setOpenModal(false);
  }

  async function handleDeleteMeal() {
    try {
      setIsLoading(true);
      await deleteMeal(id);
      navigation.navigate("home");
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Não foi possível deletar a refeição.");
    } finally {
      setOpenModal(false);
      setIsLoading(false);
    }
  }

  async function fetchMeal() {
    try {
      setIsLoading(true);
      const data = await findOneMeal(id);
      setMeal(data);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar a refeição.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleUpdate() {
    navigation.navigate("new", { id });
  }

  useEffect(() => {
    fetchMeal();
  }, []);

  return (
    <Container type={meal?.diet ? "PRIMARY" : "SECONDARY"}>
      <DeleteMealModal
        openModal={openModal}
        onCloseModal={onCloseModal}
        onConfirmModal={handleDeleteMeal}
      />
      <Header action="Refeição" />
      <Content>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <InfoContainer>
              <Name>{meal?.name}</Name>
              <Text>{meal?.description}</Text>
              <Label text="Data e Hora" />
              <Text>
                {meal?.date} às {meal?.hour}
              </Text>
              <Tag>
                <Badge type={meal?.diet ? "PRIMARY" : "SECONDARY"} />
                <Title>
                  {meal?.diet ? "Dentro da dieta" : "Fora  da dieta"}
                </Title>
              </Tag>
            </InfoContainer>
            <Button
              title="Editar refeição"
              full
              showIcon
              style={{ marginBottom: 9 }}
              icon="mode-edit-outline"
              onPress={handleUpdate}
            />
            <Button
              title="Excluir refeição"
              full
              showIcon
              type="SECONDARY"
              icon="delete-outline"
              onPress={() => setOpenModal(true)}
            />
          </>
        )}
      </Content>
    </Container>
  );
}
