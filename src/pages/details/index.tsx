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
         console.log(data?.data?.recipe?.image_url);
        
      }
    }
    getRecipeDetails();
  }, [])



  return (
    <div className="container mx-auto py-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 w-full overflow-hidden rounded-2xl group">
          <img src={recipeDetailsData?.image_url}/>
        </div>
      </div>
    </div>
  )
}