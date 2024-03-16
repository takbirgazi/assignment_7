import { useState } from "react";
import FoodCard from "../FoodCard/FoodCard";
import FoodTable from "./FoodTable";
import { useEffect } from "react";

export default function FoodProcess(){
    const [cards, setCards] = useState([]);
    useEffect(()=>{
        fetch("recipes.json")
        .then(res => res.json())
        .then(data => setCards(data));
    },[]);
    return(
        <div className="flex gap-5 my-5">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
                {cards.map(cards => <FoodCard key={cards.recipe_id} cardInfo={cards}></FoodCard>)}
            </div>
            {/* Right Side bar */}
            <div className="w-[40%]">
                <FoodTable></FoodTable>
            </div>
        </div>
    )
}