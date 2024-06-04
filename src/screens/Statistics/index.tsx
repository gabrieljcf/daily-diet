import { PercentageHeader } from "@components/PercentageHeader";
import { Header } from "@components/Header";
import {
  Container,
  Content,
  DietStatisticContainer,
  Title,
  styles,
} from "./styles";
import { StatisticCard } from "@components/StatisticCard";
import { getAllMeal } from "@storage/meal/getAll";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Loading } from "@components/Loading";

export function Statistics() {
  const [isLoading, setIsLoading] = useState(false);
  const [dietPercentage, setDietPecentage] = useState(0);
  const [totalMeal, setTotalMeal] = useState(0);
  const [mealInDiet, setMealInDiet] = useState(0);
  const [mealOutDiet, setMealOutDiet] = useState(0);

  async function fetchMeals() {
    try {
      setIsLoading(true);
      const data = await getAllMeal();
      const totalMeal = data.length
      setTotalMeal(totalMeal);
      const mealInDiet = data.filter((meal) => meal.diet).length;
      setMealInDiet(mealInDiet);
      const dietPercentage = mealInDiet / totalMeal * 100
      setDietPecentage(+dietPercentage.toFixed(2))
      const mealOutDiet = data.filter((meal) => !meal.diet).length;
      setMealOutDiet(mealOutDiet);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar as estatisticas.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    fetchMeals();
  }, []);
  return (
    <Container type="PRIMARY">
      <Header type="PRIMARY" />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PercentageHeader percentage={dietPercentage} style={styles.mt32} />
          <Content>
            <Title>Estatísticas gerais</Title>
            <StatisticCard
              title={mealInDiet}
              subTitle="Melhor sequeêcia de pratos dentro da dieta"
              fullWidth
            />
            <StatisticCard
              title={totalMeal}
              subTitle="Refeições registradas"
              fullWidth
            />
            <DietStatisticContainer>
              <StatisticCard
                title={mealInDiet}
                type="PRIMARY"
                subTitle="Refeições dentro da dieta"
              />
              <StatisticCard
                title={mealOutDiet}
                type="SECONDARY"
                subTitle="Refeições fora da dieta"
              />
            </DietStatisticContainer>
          </Content>
        </>
      )}
    </Container>
  );
}
