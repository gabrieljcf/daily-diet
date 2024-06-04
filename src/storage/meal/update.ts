import AsyncStorage from "@react-native-async-storage/async-storage";
import { CreateMealDto } from "./CreateMealDto";
import { getAllMeal } from "./getAll";
import { MEAL_COLLECTION } from "@storage/config";

export async function updateMeal(id: string, input: CreateMealDto) {
  try {
    const stored = await getAllMeal();
    const index = stored.findIndex((meal) => meal.id === id);
    stored[index] = { id, ...input };
    const meals = JSON.stringify(stored);
    await AsyncStorage.setItem(MEAL_COLLECTION, meals);
  } catch (error) {
    throw error;
  }
}
