import { useEffect, useState } from "react"
import styles from "./AvailableMeals.module.css"
import Card from "../UI/Card"
import MealItem from "./MealItem/MealItem"

const AvailableMeals = () => {
  const [meals, setMeals] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // fetching data from firebase after the comp is initially loaded or some dependency change
  //the effect func should not return a promise, so effect func cannot be async function
  useEffect(() => {
    console.log("effect func")
    //the method of use async func in useEffect
    const fetchMeals = async () => {
      // get request
      const response = await fetch("https://foodapp-253e6-default-rtdb.firebaseio.com/meals.json")
      //convert returned JSON to js obj, responseData is an obj
      const responseData = await response.json()

      const loadedMeals = []
      // convert obj with keys into an array
      //  for in oops through the properties of an Object:
      for (let key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        })
      }
      //update meals by state
      setMeals(loadedMeals)
      setIsLoading(false)
    }
    fetchMeals()
  }, [])

  if (isLoading) {
    return section
  }
  const mealsList = meals.map((meal) => <MealItem id={meal.id} key={meal.id} price={meal.price} name={meal.name} description={meal.description}></MealItem>)
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  )
}
export default AvailableMeals
