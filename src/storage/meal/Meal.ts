export type Meal = {
  id: string;
  name: string;
  description: string;
  date: string;
  hour: string;
  diet: boolean;
};

type Data = Omit<Meal, "description" | "date">[];

export type GroupedMeal = {
  date: string;
  data: Data;
};