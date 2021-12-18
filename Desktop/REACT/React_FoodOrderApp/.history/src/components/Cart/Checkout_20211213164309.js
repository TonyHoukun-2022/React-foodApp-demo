import {useRef} from 'react'
import styles from "./Checkout.module.css"
const Checkout = (props) => {
  //useRef to validate form inputs after submit
  const nameInputRef = useRef()
  const streetInputRef = useRef()
  const postalInputRef = useRef()
  const cityInputRef = useRef()

  //helper funcs, validation rules
  const isEmpty = value => value.trim() === ''
  const isNotFiveChars = value => value.trim().length !== 5

  const confirmHandler = (event) => {
    event.preventDefault()
    //read what user have entered when the form is submitted
    const enteredName = nameInputRef.current.value
    const enteredStreet = streetInputRef.current.value
    const enteredPostal = postalInputRef.current.value
    const enteredCity = cityInputRef.current.value

    const enteredNameIsInvalid = isEmpty(enteredName)
    const enteredStreetIsInvalid = isEmpty(enteredStreet)
    const enteredPostalIsInvalid = isEmpty(enteredPostal)
     const enteredCityIsInvalid = isEmpty(enteredCity)

  }

  return (
    <form onSubmit={confirmHandler}>
      <div className={styles.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={ nameInputRef}/>
      </div>
      <div className={styles.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={ streetInputRef}/>
      </div>
      <div className={styles.control}>
        <label htmlFor="postal">postal</label>
        <input type="text" id="postal" ref={postalInputRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="city">city</label>
        <input type="text" id="city" ref={cityInputRef} />
      </div>
      <div className={styles.actions}>
        <button onClick = {props.onCancel}>Cancel</button>
        <button className={styles.submit}>confirm</button>
      </div>
    </form>
  )
}
export default Checkout
