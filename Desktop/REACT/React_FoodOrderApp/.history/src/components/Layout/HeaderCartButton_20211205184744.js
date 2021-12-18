import CartIcon from "../Cart/CartIcon"
import { useContext } from "react"
import styles from "./HeaderCartButton.module.css"
import CartContext from "../../StoreContext/cart-context"
const HeaderCartButton = (props) => {
  const cartctx = useContext(CartContext)
  const numOfCartItems = cartctx.items.return(
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your cart</span>
      <span className={styles.badge}>{}</span>
    </button>
  )
}
export default HeaderCartButton
