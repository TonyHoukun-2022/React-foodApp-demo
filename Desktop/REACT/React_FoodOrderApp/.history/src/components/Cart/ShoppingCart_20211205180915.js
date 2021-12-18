import style from "./ShoppingCart.module.css"
import Modal from "../UI/Modal"
const ShoppingCart = (props) => { 
    const cartItems =
        <ul className={style['cart-items']}>
            {[{ id: 'm1', name: 'sushi', amount: 4, price: 15 }].map(item => (
            <li>{ item.name}</li>
            ))}
        </ul>
        
    return (
        <Modal>
            {cartItems}
            <div className={style.total}>
                <span>Total amount</span>
                <span>35.23</span>
            </div>
            <div className={style.actions}>
                <button onClick={ props.onClose} className={style['button--alt']}>Close</button>
                <button className={style.button}>Order</button>
            </div>
        </Modal>
    )
}
export default ShoppingCart
