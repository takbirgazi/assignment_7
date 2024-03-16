import clock from "../../assets/images/clock.png";
import fire from "../../assets/images/fire.png";
export default function FoodCard({cardInfo}){
    const {recipe_id, recipe_name, short_description,preparing_time, calories,ingredients} = cardInfo;
    return(
        <div className="card border shadow-xl p-4">
            <figure><img className="rounded-xl" src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-md font-bold">{recipe_name}</h2>
                <p className="border-b-2 py-5 text-sm opacity-70">{short_description}</p>
                <h2 className="font-bold">Ingredients: 6</h2>
                <ul className="text-sm opacity-70 py-2 list-inside">
                    {ingredients.map((ingred,ind)=> <li key={ind} className="list-disc">{ingred}</li>)}                    
                </ul>
                <div className="flex gap-2 border-b-2 pb-5">
                    <div className="flex items-center"><img src={clock}/><span className="text-sm">{preparing_time}</span></div>
                    <div className="flex items-center"><img src={fire}/><span className="text-sm">{calories}</span></div>
                </div>
                <div className="card-actions justify-start">
                <button className="px-4 py-1 rounded-full border bg-green-500 hover:bg-green-800 hover:text-white">Want to Cook</button>
                </div>
            </div>
        </div>
    )
}