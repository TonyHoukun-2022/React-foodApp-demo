import { useContext } from "react"
import MealItemForm from "./MealItemForm"
import styles from "./MealItem.module.css"
import CartContext from "../../../StoreContext/cart-context"
const MealItem = (props) => {
    const cartCtx
  //price is set to be like $xx.xx
  const price = `$${props.price.toFixed(2)}`
    const addItemToCartHandler = (amount) => {
      
  }
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addItemToCartHandler}></MealItemForm>
      </div>
    </li>
  )
}
export default MealItem
