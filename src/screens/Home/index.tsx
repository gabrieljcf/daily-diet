import { useCallback, useState } from "react";
import {
  Container,
  HomeHeader,
  Icon,
  Logo,
  MealDate,
  PercentageButton,
  Profile,
  Title,
} from "./styles";
import logoImg from "@assets/logo.png";
import { Button } from "@components/Button";
import { MealsCard } from "@components/MealsCard";
import { Alert, SectionList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { PercentageHeader } from "@components/PercentageHeader";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Loading } from "@components/Loading";
import { getAllMeal } from "@storage/meal/getAll";
import { groupMeals } from "@utils/groupMeals";
import { GroupedMeal, Meal } from "@storage/meal/Meal";

export function Home() {
  const navigation = useNavigation();
  const [meals, setMeals] = useState<GroupedMeal[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [percentage, setPercentage] = useState(0);

  function calculatePercentage(meals: Meal[]) {
    const mealInDiet = meals.filter((meal) => meal.diet).length || 0;
    const total = meals.length || 0
    const calculatePercentage = (mealInDiet / total) * 100;
    return isNaN(calculatePercentage) ? 0 : +calculatePercentage.toFixed(2);
  }

  async function fetchMeals() {
    try {
      setIsLoading(true);
      const data = await getAllMeal();
      const percentage = calculatePercentage(data);
      setPercentage(percentage);
      const groupedMeal = groupMeals(data);
      setMeals(groupedMeal);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar a lista de refeições.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleViewStatistics() {
    navigation.navigate("statistics", { id: "1" });
  }

  function handleNewMeal() {
    navigation.navigate("new", { id: undefined });
  }

  function handleShowDetails(id: string) {
    navigation.navigate("meal", { id });
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <Container>
      <HomeHeader>
        <Logo source={logoImg} />
        <Profile source={logoImg} />
      </HomeHeader>

      <PercentageButton type={percentage < 50 ? 'SECONDARY' : 'PRIMARY'} onPress={handleViewStatistics}>
        <Icon type={percentage < 50 ? 'SECONDARY' : 'PRIMARY'} />
        <PercentageHeader percentage={percentage} />
      </PercentageButton>

      <Title>Refeições</Title>

      <Button title="Nova refeição" showIcon full onPress={handleNewMeal} />
      {isLoading ? (
        <Loading />
      ) : (
        <SectionList
          sections={meals}
          contentContainerStyle={!meals.length && { flex: 1 }}
          ListEmptyComponent={
            <ListEmpty message="Cadastre refeições e analise seu progresso." />
          }
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MealsCard
              meal={item.name}
              hour={item.hour}
              diet={item.diet}
              onPress={() => handleShowDetails(item.id)}
            />
          )}
          renderSectionHeader={({ section: { date } }) => (
            <MealDate>{date}</MealDate>
          )}
        />
      )}
    </Container>
  );
}
