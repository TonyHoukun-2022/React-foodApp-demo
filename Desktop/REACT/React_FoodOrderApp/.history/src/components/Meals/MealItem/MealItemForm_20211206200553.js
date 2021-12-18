import 
import Input from "../../UI/Input"
import styles from "./MealItemForm.module.css"
const MealItemForm = (props) => {
  const submitHandler = (event) => {
    //prevent default submit action (reloading page)
    event.preventDefault()
  }
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          //all built-in attributes for <input> tag in Input.js
          id: `'amount_${props.id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <button>Add</button>
    </form>
  )
}
export default MealItemForm
