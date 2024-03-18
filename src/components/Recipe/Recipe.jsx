import { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import {toast } from 'react-toastify';
import WcookTable from "../WcookTable/WcookTable";
import CrCookTable from "../CrCookTable/CrCookTable";

export default function Recipe(){
    const [cards, setCards] = useState([]);
    let [cookCount, setCookCount] = useState(0);
    let [crCookCount, setCrCookCount] = useState(0);
    const [wCook, setWcook] = useState([]);
    const [crCook, setCrCook] = useState([]);

    useEffect(()=>{
    fetch("recipes.json")
    .then(res => res.json())
    .then(data => setCards(data));
    },[]);


    const wCookHanddlr = ()=> {
        let newCount = cookCount +1;
        setCookCount(newCount);
    }
    const addwCookHanddlr =(cardInfo)=>{
        if(wCook.includes(cardInfo)){
            setCookCount(cookCount);
            toast("Already Exist");
        }else{
        const allWCook = [...wCook, cardInfo];
        setWcook(allWCook);
        }
    }
    const crCookHanddlrCount =()=>{
        let newCcount = crCookCount +1;
        setCrCookCount(newCcount);

    }
    const crCookHanddlr = (wCookInfo)=>{
        if(crCook.includes(wCookInfo)){
            setCrCookCount(crCookCount);
        }else{
            const allCrCook = [...crCook,wCookInfo];
            setCrCook(allCrCook); 
            let newCount = cookCount -1;
            setCookCount(newCount); 
            setWcook(wCook.filter(rmData => rmData != wCookInfo));

        }

    }
    return(
        <div className="flex gap-5 my-5 lg:flex-row flex-col">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
                {cards.map((card,ind)=> <RecipeCard cardInfo={card} wCookHanddlr={wCookHanddlr} addwCookHanddlr={addwCookHanddlr} key={ind}></RecipeCard>)}
            </div>
            <div className="lg:w-[40%]">
                <div>
                    <h3 className="text-center font-bold text-md border-b-2 w-4/5 mx-auto pb-5">Want to cook: {cookCount}</h3>
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                                <th></th>
                            </tr>
                            </thead>
                            {wCook.map((cookData,ind)=> <WcookTable wCookInfo={cookData} crCookHanddlrCount={crCookHanddlrCount} crCookHanddlr={crCookHanddlr} key={ind} countSl={ind}></WcookTable>)}
                        </table>
                    </div> 
                </div>

                {/* Preparing  */}

                <div className="mt-4">
                    <h3 className="text-center font-bold text-md border-b-2 w-4/5 mx-auto pb-5">Want to cook: {crCookCount}</h3>
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                                <th></th>
                            </tr>
                            </thead>
                            {crCook.map((crCookData,ind)=> <CrCookTable crCookInfo={crCookData} key={ind} countSl={ind}></CrCookTable>)}
                        </table>
                    </div> 
                </div>




                                
            </div>
        </div>
    )
}