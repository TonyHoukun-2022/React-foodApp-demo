import MealItemForm from "./MealItemForm"
import styles from "./MealItem.module.css"
const MealItem = (props) => {
  //price is set to be like $xx.xx
  const price = `$${props.price.toFixed(2)}`
  const addItemToCartHandler = (amount) => {}
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id}></MealItemForm>
      </div>
    </li>
  )
}
export default MealItem
