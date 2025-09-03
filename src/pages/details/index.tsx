import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { GlobalContext } from "../../context/globalcontext";

export default function Details() {

  const { id } = useParams();
  const { recipeDetailsData, setRecipeDetailsData } = useContext(GlobalContext)!;




  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
      const data = await response.json();


      if (data?.data) {
        setRecipeDetailsData(data?.data.recipe);
        console.log(data?.data?.recipe);
        console.log(recipeDetailsData?.ingredients);
        

      }
    }
    getRecipeDetails();
  }, [])



  return (
    <div className="container mx-auto py-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 w-full overflow-hidden rounded-2xl group">
          <img src={recipeDetailsData?.image_url}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300" />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <span className="text-lg font-medium text-cyan-800">{recipeDetailsData?.publisher}</span>
        <h3 className="font-bold text-2x1 truncate text-black font-bold">{recipeDetailsData?.title}</h3>
        <div>
          <button
            className="p-3 px-8 rounded-large text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-indigo-400 text-white"
          >Save as favorites</button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">Ingredients:</span>
          <ul className="flex flex-col gap-3">
            {
              recipeDetailsData?.ingredients.map(ingredient => <li>{
                <span>{ingredient.quantity} {ingredient.unit} {ingredient.description}</span>
                }</li>)
            }

          </ul>
        </div>
      </div>
    </div>
  )
}