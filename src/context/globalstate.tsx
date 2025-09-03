import React from "react";
import { GlobalContext } from "./globalcontext";
import type { Recipe } from "../components/types/recipe";

export default function GlobalState({ children }: { children: React.ReactNode }) {
  // defining the type for the recipe object same as globalcontext.tsx
  // type Recipe = {
  //   id: string;
  //   title: string;
  //   publisher: string;
  //   image_url: string;
  // };

  const [searchParam, setSearchParam] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  //calling the recipe object type here
  const [recipeList, setRecipeList] = React.useState<Recipe[]>([]);
  const [recipeDetailsData, setRecipeDetailsData] = React.useState<Recipe | null>(null);

  //async function to fetch the api data
  async function handleSubmit(event: React.FormEvent) {
    try {

      event.preventDefault();
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);

      const data = await response.json();
      if (data?.data?.recipes) {
        setRecipeList(data.data.recipes);
        setLoading(false);
        setSearchParam('');
      }

    } catch (error) {
      console.log(error);
      setLoading(false);
      setSearchParam('');
    }
  }

  //providing the values to the context, passing props to children
  return (
    <GlobalContext.Provider value={{ searchParam, setSearchParam, handleSubmit, loading, recipeList ,recipeDetailsData, setRecipeDetailsData}}>
      {children}
    </GlobalContext.Provider>
  );
}
