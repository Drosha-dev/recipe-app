import React from "react";
import { GlobalContext } from "./globalcontext";

export default function GlobalState({ children }: { children: React.ReactNode }) {

  type Recipe = {
    id: string;
    title: string;
    publisher: string;
    image_url: string;
  };

  const [searchParam, setSearchParam] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [recipeList, setRecipeList] = React.useState<Recipe[]>([]);


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

  console.log(recipeList,loading);
  
  return (
    <GlobalContext.Provider value={{ searchParam, setSearchParam, handleSubmit, loading, recipeList }}>
      {children}
    </GlobalContext.Provider>
  );
}
