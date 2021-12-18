import styles from "./MealItemForm.module.css"
const MealItemForm = (props) => {
    return (
        <form className={ styles.form} action="">
            <input type="text" />
            <button>Add</button>
        </form>
    )
    
}
export default MealItemForm
