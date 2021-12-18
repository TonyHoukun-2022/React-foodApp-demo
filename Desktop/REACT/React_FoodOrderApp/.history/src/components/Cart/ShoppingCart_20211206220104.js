import { useContext } from "react"
import style from "./ShoppingCart.module.css"
import Modal from "../UI/Modal"
import CartContext from "../../StoreContext/cart-context"
const ShoppingCart = (props) => {
  const cartCtx = useContext(CartContext)
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0
  const cartItems = (
    <ul className={style["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  )

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={style.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={style.actions}>
        <button onClick={props.onClose} className={style["button--alt"]}>
          Close
        </button>
        {hasItems && <button className={style.button}>Order</button>}
      </div>
    </Modal>
  )
}
export default ShoppingCart
