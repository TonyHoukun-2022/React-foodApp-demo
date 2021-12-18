import styles from "./Checkout.module.css"
const Checkout = (props) => {
  return (
    <form>
      <div className={styles.control}>
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" />
          </div>
          <div className={styles.control}>
              <label htmlFor="street">Street</label>
              <input type="text" id="street" />
      </div>
    </form>
  )
}
export default Checkout
