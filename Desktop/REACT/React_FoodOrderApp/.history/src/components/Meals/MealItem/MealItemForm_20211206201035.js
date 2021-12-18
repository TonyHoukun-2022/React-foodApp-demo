import { useRef } from "react"
import Input from "../../UI/Input"
import styles from "./MealItemForm.module.css"
const MealItemForm = (props) => {
  const amountInputRef = useRef()
  const submitHandler = (event) => {
    //prevent default submit action (reloading page)
    event.preventDefault()
  }
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        //cannot directly use ref in custom component
        //   All we have to do is go to the Componentwhere we wanna receive refs. In this case, thats the Input Component in the UI folder,and then make sure you import React in there from react and wrap your Component function with React.forwardRef.
        ref={amountInputRef}
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
