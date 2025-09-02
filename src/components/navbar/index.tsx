import { NavLink } from "react-router";
import { GlobalContext } from "../../context/globalcontext";
import React from "react";

export default function Navbar() {

  // passing this through the context 
  const {searchParam, setSearchParam, handleSubmit} = React.useContext(GlobalContext)!;

  
  

  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold">
        <NavLink to={'/'} >FoodRecipe</NavLink>
      </h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchParam} onChange={e =>setSearchParam(e.target.value)} name="search" placeholder="Search Recipe" className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200" />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink to={'/'} className={'text-black hover:text-red-500 duration-300'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/favorites'} className={'text-black hover:text-red-500 duration-300'}>Favorites</NavLink>
        </li>
      </ul>
    </nav>
  )
}