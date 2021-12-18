import style from "./ShoppingCart.module.css"
const ShoppingCart = (props) => { 
    const cartItems =
        <ul>
            {[{ id: 'm1', name: 'sushi', amount: 4, price: 15 }].map(item => (
            <li>{ item.name}</li>
            ))}
        </ul>
        
    return (
        <div>
            {cartItems}
            <div></div>
        </div>
    )
}
export default ShoppingCart
