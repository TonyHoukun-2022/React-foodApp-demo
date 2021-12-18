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
      <div className={styles.control}>
        <label htmlFor="postal">postal</label>
        <input type="text" id="postal" />
      </div>
      <div className={styles.control}>
        <label htmlFor="city">city</label>
        <input type="text" id="city" />
      </div>
      <button>Cancel</button>
      <button>confirm</button>
    </form>
  )
}
export default Checkout
