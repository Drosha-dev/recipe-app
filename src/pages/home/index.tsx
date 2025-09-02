import { useContext } from "react";
import { GlobalContext } from "../../context/globalcontext";
import RecipeItem from "../../components/recipe-item";


export default function Home() {

  const {recipeList,loading} = useContext(GlobalContext)!;


  if(loading) {
    return <div className="text-center text-2xl font-semibold">Loading...</div>
  }
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {
        recipeList && recipeList.length > 0 ?
        recipeList.map((item) => <RecipeItem item={item} />) 
        : <div><p className="lg:text-4xl text-xl text-center text-black font-extrabold">Nothing to show please search again</p></div>}
    </div>
  );
}