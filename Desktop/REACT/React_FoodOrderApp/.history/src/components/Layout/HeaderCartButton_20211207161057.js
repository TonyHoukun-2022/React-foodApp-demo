import CartIcon from "../Cart/CartIcon"
import { useContext, useEffect, useState } from "react"
import styles from "./HeaderCartButton.module.css"
import CartContext from "../../StoreContext/cart-context"
const HeaderCartButton = (props) => {
  const [btnIsHighLighted, setBtnIsHighLighted] = useState(false)
  const cartctx = useContext(CartContext)
  const { items } = cartctx
  // reduce is a built-in js method allows us to transform an array of data into a single value.
  const numOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount
  }, 0)
  //if btnIsHighlighted is true, add animation 'bump' for button
  const btnStyle = `${styles.button} ${btnIsHighLighted ? styles.bump : ""} `
  //useEffect to activate the button animation whenever the cart state changes
  useEffect(() => {
    // if there is no item in cart, setBtnIsHighLighted will not be set true
    if (cartctx.items.length === 0) {
      return
    }
    setBtnIsHighLighted(true)
  }, [items])
  return (
    <button className={btnStyle} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your cart</span>
      <span className={styles.badge}>{numOfCartItems}</span>
    </button>
  )
}
export default HeaderCartButton
