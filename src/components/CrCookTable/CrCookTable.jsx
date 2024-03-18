import PropTypes from 'prop-types'; // ES6
export default function CrCookTable({crCookInfo,countSl}){
    const {recipe_name,preparing_time,calories} = crCookInfo;
    return(
        <tbody>
            <tr className="bg-base-200">
                <th>{countSl+1}</th>
                <td>{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
            </tr>
        </tbody>
    )
}
CrCookTable.propTypes = {
    crCookInfo: PropTypes.object,
    countSl: PropTypes.number,
}