import CartIcon from "../Cart/CartIcon"
import styles from "./HeaderCartButton.module.css"
const HeaderCartButton = props => {
    return (
        <button className={styles.button}>
            <span className={styles.icon}>
                <CartIcon></CartIcon>
            </span>
            <span>Your cart</span>
            <span className={styles.badge}>4</span>
        </button>
    )
 }
export default HeaderCartButton