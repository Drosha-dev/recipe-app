import { createContext } from "react";
//Had to seperate the context from the state to avoid circular dependency issues



//Global context and had to add a recipe object so it understood the data type


// defining the type for the recipe object

type Recipe = {
    id: string;
    title: string;
    publisher: string;
    image_url: string;
  };
//props for the context
interface GlobalContextType {
  searchParam: string;
  setSearchParam: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (event: React.FormEvent) => Promise<void>;
  loading: boolean;
  recipeList: Recipe[] | null;
  recipeDetailsData: Recipe | null;
  setRecipeDetailsData: React.Dispatch<React.SetStateAction<Recipe | null>>;
}

// Use `null` initially, but type it as GlobalContextType | null
export const GlobalContext = createContext<GlobalContextType | null>(null);
