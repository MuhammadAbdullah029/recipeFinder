import { Search } from "lucide-react"
import RecipeCards from "../components/RecipeCards"
import { useEffect, useState } from "react";
import { getRandomcolor } from "../lib/utils";

const APP_ID = import.meta.env.VITE_APP_ID;
const APP_KEY = import.meta.env.VITE_APP_KEY;

const HomePage = () => {

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchRecipes = async (serachQuery) =>{
        setLoading(true);
        setRecipes([]);

        try {
            const res = await fetch(`https://api.edamam.com/api/recipes/v2/?app_id=${APP_ID}&app_key=${APP_KEY}&q=${serachQuery}&type=public`)
            const data = await res.json();
            setRecipes(data.hits)
        } catch (error) {
            console.log(error.message);
        } finally{}
             setLoading(false);
    }
  
    useEffect(() => {
      fetchRecipes("chicken");
    }, []);


    const handleSearch = (e) =>{
        e.preventDefault();
        fetchRecipes(e.target[0].value);
    }
  return (
    <div className="bg-[#faf9fb] p-10 flex-1 " >
        <div className="max-w-screen-lg mx-auto">
            <form onSubmit={handleSearch} >
                <label className="input shadow-md flex items-center gap-2  " >
                    <Search size={24} />
                    <input type="text"
                    className="text-sm md:text-md grow "
                    placeholder="What Do You want to Cook today?"
                    />
                </label>
            </form>

            <h1 className="font-bold text-3xl md:text-5xl mt-4">
                Recommended Recipes
            </h1>
            <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight" >Popular Choices</p>

        <div className="grid gap-3 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mt-3">

            {!loading && recipes.map(({recipe}, index)=>(
                <RecipeCards key={index} recipe={recipe}
                    {...getRandomcolor()}
                />
            ))}

            {loading &&
                [...Array(9)].map((_, index)=>(
                    <div key={index} className="flex flex-col gap-4 w-full">
                        <div className="skeleton h-32 w-full"></div>
                        <div className="flex justify-between">
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-24"></div>
                        </div>
                        <div className="skeleton h-4 w-1/4"></div>
                    </div>
                ))
            }
            
        </div>

        </div>
    </div>
  )
}

export default HomePage