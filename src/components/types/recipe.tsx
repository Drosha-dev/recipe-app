// src/types.ts
import type { Ingredient } from "./ingredient";
export interface Recipe {
  id: string;
  title: string;
  image_url: string;
  publisher: string;
  source_url: string;
  ingredients: Ingredient[];
  servings: number;
  cooking_time: number;
}
