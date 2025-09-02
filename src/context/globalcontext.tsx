import { createContext } from "react";

type Recipe = {
    id: string;
    title: string;
    publisher: string;
    image_url: string;
  };

interface GlobalContextType {
  searchParam: string;
  setSearchParam: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (event: React.FormEvent) => Promise<void>;
  loading: boolean;
  recipeList: Recipe[];
  
}

// Use `null` initially, but type it as GlobalContextType | null
export const GlobalContext = createContext<GlobalContextType | null>(null);
