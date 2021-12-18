import styles from "./Checkout.module.css"
const Checkout = (props) => {
  return (
    <form>
      <div className={styles.control}>
        <label htmlFor="name">Your Name</label>
      </div>
    </form>
  )
}
export default Checkout
