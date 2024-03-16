export default function FoodTable(){
    return(
        <>
            <div>
                <h3 className="text-center font-bold text-md border-b-2 w-4/5 mx-auto pb-5">Want to cook: </h3>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="bg-base-200">
                            <th>1</th>
                            <td>Chicken Caesar Salad</td>
                            <td>20 minutes</td>
                            <td>400 calories</td>
                            <td><button className="px-4 py-1 rounded-full border bg-green-500 hover:bg-green-800 hover:text-white">Preparing</button></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                <h3 className="text-center font-bold text-md border-b-2 w-4/5 mx-auto pb-5">Currently cooking: </h3>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="bg-base-200">
                            <th>1</th>
                            <td>Chicken Caesar Salad</td>
                            <td>20 minutes</td>
                            <td>400 calories</td>
                            <td><button className="px-4 py-1 rounded-full border bg-green-500 hover:bg-green-800 hover:text-white">Preparing</button></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}