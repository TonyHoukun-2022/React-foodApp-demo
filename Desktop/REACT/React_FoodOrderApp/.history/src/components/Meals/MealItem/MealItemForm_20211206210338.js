import { useRef, useState } from "react"
import Input from "../../UI/Input"
import styles from "./MealItemForm.module.css"
const MealItemForm = (props) => {
  const amountInputRef = useRef()
  const [amountIsValid, setAmountIsValid] = useState(true)
  const submitHandler = (event) => {
    //prevent default submit action (reloading page)
    event.preventDefault()
    //amountInputRef.current 指向 Input component 里面的 <input>, <input> is stored in the amountInputRef returned by useRef().
    const enteredAmount = amountInputRef.current.value
    //<input> has a value property holds the currently entered value, and that value is always a string, so we need to convert it to a number.
    const enteredAmountNum = +enteredAmount
    if (enteredAmount.trim().length === 0 || enteredAmountNum < 1 || enteredAmountNum > 5) {
      setAmountIsValid(false)
      //stop the submitHandler func
      return
    }
    props.onAddToCart(enteredAmountNum)
  }
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        //cannot directly use ref in custom component
        //   All we have to do is go to the Component where we wanna receive refs. In this case, thats the Input Component, and then make sure you import React in there from react and wrap your Component function with React.forwardRef.

        //React 会将ref 作为第二个参数传递给React.forwardRef函数渲染的Input.js
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
      {!amountIsValid && <p>Please enter a valid amount of item</p>}
    </form>
  )
}
export default MealItemForm
