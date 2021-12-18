import style from "./ShoppingCart.module.css"
const ShoppingCart = (props) => { 
    const cartItems =
        <ul className={style['cart-items']}>
            {[{ id: 'm1', name: 'sushi', amount: 4, price: 15 }].map(item => (
            <li>{ item.name}</li>
            ))}
        </ul>
        
    return (
        <div>
            {cartItems}
            <div>
                <span>Total amount</span>
                <span></span>
            </div>
        </div>
    )
}
export default ShoppingCart
