import styles from "./Input.module.css"
const Input = (props) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* ...props.input ensures that all the key value pairs in this input object,which we receive on props input are added as property:value to input tag here. */}
      <input {...props.input} />
    </div>
  )
}
export default Input
