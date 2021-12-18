import { useEffect } from "react"
import styles from "./AvailableMeals.module.css"
import Card from "../UI/Card"
import MealItem from "./MealItem/MealItem"

const AvailableMeals = () => {
  // fetching data from firebase after the comp is initially loaded or some dependency change

  //the effect func should not return a promise, so effect func cannot be async function
  useEffect(() => {
    //the method of use async func in useEffect
    const fetchMeals = async () => {
      // get request
      await fetch("https://foodapp-253e6-default-rtdb.firebaseio.com/meals.json")
    }
    fetchMeals()
  }, [])
  const mealsList = fetchMeals.map((meal) => <MealItem id={meal.id} key={meal.id} price={meal.price} name={meal.name} description={meal.description}></MealItem>)
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  )
}
export default AvailableMeals
