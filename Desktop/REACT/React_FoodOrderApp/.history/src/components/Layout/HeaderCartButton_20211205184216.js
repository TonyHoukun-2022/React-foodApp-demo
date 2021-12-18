import CartIcon from "../Cart/CartIcon"
import { useContext } from "react"
import styles from "./HeaderCartButton.module.css"
const HeaderCartButton = (props) => {
  useContext()
  return (
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
