import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/config";
import { Meal } from "./Meal";

export async function getAllMeal() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);
    const meals: Meal[] = storage ? JSON.parse(storage) : []
    return meals
  } catch (error) {
    throw error;
  }
}