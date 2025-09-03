import React, { useContext } from "react";
import { GlobalContext } from "../../context/globalcontext";

import RecipeItem from "../../components/recipe-item";


export default function Favorites() {
  const {favoritesList} = useContext(GlobalContext)!;

console.log(favoritesList,'favoritesList in favorites page');

  
  return (
    <div className="py-8 md:py2 container mx-auto flex flex-wrap justify-center gap-5">
      {
        favoritesList && favoritesList.length > 0 ?
        favoritesList.map((item) => <RecipeItem item={item} />) 
        : <div><p className="lg:text-4xl text-xl text-center text-black font-extrabold">Nothing in your favorites. Go add some!</p></div>}
    </div>
  );
}