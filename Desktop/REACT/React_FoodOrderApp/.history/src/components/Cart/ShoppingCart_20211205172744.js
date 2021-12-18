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
            <div className={style.total}>
                <span>Total amount</span>
                <span>35.23</span>
            </div>
            <div className={style.actions}>
                <button className={style['button--alt']}>Close</button>
                <button className={style.button}>Order</button>
            </div>
        </div>
    )
}
export default ShoppingCart
