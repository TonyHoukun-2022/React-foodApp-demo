const MealItem = props => { 
    //price is set to be like $xx.xx
    const price =`$${props.price.toFixed(2)}`
    return (
        <li>
            <div>
                <h3>{props.name}</h3>
                <div>{props.description}</div>
                div
            </div>
            <div></div>
        </li>
    )
}
export default MealItem