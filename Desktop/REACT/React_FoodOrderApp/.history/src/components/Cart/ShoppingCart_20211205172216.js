import style from "./ShoppingCart.module.css"
const ShoppingCart = (props) => { 
    const cartItems = [{ id: 'm1', name: 'sushi', amount: 4, price: 15 }].map(item => (
        <li>{ item.name}</li>
    ))
    return (
        <div>

        </div>
    )
}
export default ShoppingCart
