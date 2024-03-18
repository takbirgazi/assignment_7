import PropTypes from 'prop-types'; // ES6
export default function WcookTable({wCookInfo, countSl, crCookHanddlrCount, crCookHanddlr}){
    const {recipe_name, preparing_time, calories} = wCookInfo;
    return(
        <tbody>
            <tr className="bg-base-200">
                <th>{countSl+1}</th>
                <td>{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
                <td><button onClick={()=>{crCookHanddlrCount()
                crCookHanddlr(wCookInfo)}} className="px-4 py-1 rounded-full border bg-green-500 hover:bg-green-800 hover:text-white">Preparing</button></td>
            </tr>
        </tbody>
    )
}
WcookTable.propTypes = {
    wCookInfo: PropTypes.object,
    countSl: PropTypes.number,
    crCookHanddlrCount: PropTypes.func,
    crCookHanddlr: PropTypes.func,

}