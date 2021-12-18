import React from "react"
import styles from "./Input.module.css"

// the ref prop is the ref attribute of Input component in MealItemForm
//forwardRef 会将
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* ...props.input ensures that all the key value pairs in this input object,which we receive on props input are added as property:value to input tag here. */}
      <input ref={ref} {...props.input} />
    </div>
  )
})
export default Input
