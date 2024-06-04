import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllMeal } from "./getAll";
import { MEAL_COLLECTION } from "@storage/config";

export async function deleteMeal(id: string) {
  try {
    const stored = await getAllMeal();
    const meals = stored.filter((meal) => meal.id !== id);
    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(meals));
  } catch (error) {
    throw error;
  }
}
