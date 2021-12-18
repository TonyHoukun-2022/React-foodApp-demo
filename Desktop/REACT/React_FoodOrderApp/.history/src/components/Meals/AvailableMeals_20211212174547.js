import styles from "./AvailableMeals.module.css"
import Card from "../UI/Card"
import MealItem from "./MealItem/MealItem"

const AvailableMeals = () => {
  fetch()
  const mealsList = DUMMY_MEALS.map((meal) => <MealItem id={meal.id} key={meal.id} price={meal.price} name={meal.name} description={meal.description}></MealItem>)
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  )
}
export default AvailableMeals
