import FoodTable from "./FoodTable";

export default function FoodProcess(){
    return(
        <div className="flex gap-5">
            <div className="grid grid-cols-2 gap-2">

                <div className="card bg-base-100 shadow-xl">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoesghf!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-start">
                        <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoesghf!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-start">
                        <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                




            </div>
            {/* Right Side bar */}
            <div>
                <FoodTable></FoodTable>
            </div>
        </div>
    )
}