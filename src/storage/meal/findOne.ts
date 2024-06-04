import { Meal } from "./Meal";
import { getAllMeal } from "./getAll";

export async function findOneMeal(id: string) {
  try {
    const meals = await getAllMeal();
    return meals.find((meal) => meal.id === id) as Meal;
  } catch (error) {
    throw error;
  }
}
