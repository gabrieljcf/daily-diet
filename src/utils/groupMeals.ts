import { GroupedMeal, Meal } from "@storage/meal/Meal";

export function groupMeals(meals: Meal[]) {
  const groupedMeals = meals.reduce((acc, curr) => {
    const key = curr.date;

    if (!acc.has(key)) {
      acc.set(key, {
        date: curr.date,
        data: [
          {
            id: curr.id,
            hour: curr.hour,
            name: curr.name,
            diet: curr.diet,
          },
        ],
      });
    } else {
      (acc.get(key) as GroupedMeal).data.push({
        id: curr.id,
        hour: curr.hour,
        name: curr.name,
        diet: curr.diet,
      });
    }
    return acc;
  }, new Map<string, GroupedMeal>());
  return Array.from(groupedMeals.values());
}