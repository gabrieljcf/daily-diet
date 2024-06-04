import AsyncStorage from "@react-native-async-storage/async-storage";
import { CreateMealDto } from "./CreateMealDto";
import { MEAL_COLLECTION } from "@storage/config";
import { getAllMeal } from "./getAll";

export async function createMeal(createMealInput: CreateMealDto) {
  try {
    const stored = await getAllMeal()
    const input = {
      id: `${Math.random()}-${new Date().toISOString()}`,
      ...createMealInput
    }
    const meals = JSON.stringify([...stored, input]);
    await AsyncStorage.setItem(MEAL_COLLECTION, meals); 
  } catch (error) {
    throw error
  }
}