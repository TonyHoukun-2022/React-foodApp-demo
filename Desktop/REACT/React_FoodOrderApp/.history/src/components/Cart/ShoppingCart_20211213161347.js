import { useContext, useState } from "react"
import Checkout from "./Checkout"
import style from "./ShoppingCart.module.css"
import CartItem from "./CartItem"
import Modal from "../UI/Modal"
import CartContext from "../../StoreContext/cart-context"
const ShoppingCart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false)
  const cartCtx = useContext(CartContext)
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0

  // enable decrease and increase amount of items in cart
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  }

  const cartItemAddHandler = (item) => {
    //   call addItem func in CartProvider
    cartCtx.addItem({ ...item, amount: 1 })
  }

  const orderHandler = () => {
    setIsCheckout(true)
  }

  const cartItems = (
    <ul className={style["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          //   bind(null,value) pass the value to handler, make sure the handler above receive the value
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  )

  const modalActions = (
    <div className={style.actions}>
      <button onClick={props.onClose} className={style["button--alt"]}>
        {" "}
        Close
      </button>
      {hasItems && (
        <button className={style.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  )
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={style.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout />}
      {!isCheckout && modalActions}
    </Modal>
  )
}
export default ShoppingCart
