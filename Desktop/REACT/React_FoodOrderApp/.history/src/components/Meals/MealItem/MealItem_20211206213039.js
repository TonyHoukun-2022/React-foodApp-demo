import { useContext } from "react"
import MealItemForm from "./MealItemForm"
import styles from "./MealItem.module.css"
import CartContext from "../../../StoreContext/cart-context"

const MealItem = (props) => {
  const cartCtx = useContext(CartContext)
  //price is set to be like $xx.xx
  //props.price comes from AvailableMeals.js
  const price = `$${props.price.toFixed(2)}`
  // amount prop comes from the MealItemForm, enteredAmountNum
  const addItemToCartHandler = (amount) => {
    //   addItem method is defined in CartProvider
    cartCtx.addItem()
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
