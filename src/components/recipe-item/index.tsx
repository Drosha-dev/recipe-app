import { Link } from "react-router-dom";
import { decodeHtml } from "../utilities/decodeHtml";
import type { Recipe } from "../types/recipe";

interface RecipeItemProps {
    item:Recipe;
}


export default function RecipeItem({ item }: RecipeItemProps) {
    
    
    return (
        <div className="flex flex-col p-5 bg-white/75 shadow-xl/30 gap-5 border-2 rounded-2xl border-white">
            <div className="h-40 justify-center items-center overflow-hidden rounded-xl">
                {/* grabbing items image and putting it out on a card */}
                <img src={item?.image_url} alt="recipe item" className="object-cover w-full h-full" />
            </div>
            <div>
                <span className="text-lg font-medium text-cyan-800">
                    {
                        item?.publisher
                    }
                    <h3 className="font-bold text-2x1 truncate text-black font-bold">{decodeHtml(item?.title)}</h3>
                    {/* Link from router allows us to click details and pass in its id for the details page */}
                    <Link to={`/recipe-item/${item?.id}`} className="text-sm p-3 mt-3 px-8 rounded-large uppercase font-medium tracking-wider inline-block shadow-medium bg-indigo-400 text-white transform transition-transform duration-150 active:scale-95 active:shadow-sm">Recipe Details</Link>
                </span>
            </div>
        </div>
    )
}