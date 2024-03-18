import PropTypes from 'prop-types'; // ES6
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import clock from '../../assets/image/clock.png';
import fire from '../../assets/image/fire.png';
export default function RecipeCard({cardInfo,wCookHanddlr,addwCookHanddlr}){
    const {recipe_image,recipe_name,short_description,ingredients,preparing_time,calories} = cardInfo;
    return(
        <div className="card border shadow-xl p-4">
            <figure><img className="rounded-xl" src={recipe_image} alt="Shoes" /></figure>
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
                <button className="px-4 py-1 rounded-full border bg-green-500 hover:bg-green-800 hover:text-white" onClick={()=>{wCookHanddlr() 
                    addwCookHanddlr(cardInfo)}}>Want to Cook</button>
                <ToastContainer />
                </div>
            </div>
        </div>
    )

}
RecipeCard.propTypes = {
    notify: PropTypes.func,
    wCookHanddlr: PropTypes.func,
    addwCookHanddlr: PropTypes.func,
    cardInfo: PropTypes.object,
}