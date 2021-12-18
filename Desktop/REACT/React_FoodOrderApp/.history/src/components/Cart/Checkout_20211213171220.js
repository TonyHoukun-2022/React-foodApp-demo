import {useRef,useState} from 'react'
import styles from "./Checkout.module.css"
const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true
  })
  //useRef to validate form inputs after submit
  const nameInputRef = useRef()
  const streetInputRef = useRef()
  const postalInputRef = useRef()
  const cityInputRef = useRef()

  //helper funcs, validation rules
  const notEmpty = value => value.trim() !== ''
  const hasFiveChars = value => value.trim().length === 5

  const confirmHandler = (event) => {
    event.preventDefault()
    //read what user have entered when the form is submitted
    const enteredName = nameInputRef.current.value
    const enteredStreet = streetInputRef.current.value
    const enteredPostal = postalInputRef.current.value
    const enteredCity = cityInputRef.current.value

    const enteredNameIsValid = notEmpty(enteredName)
    const enteredStreetIsValid = notEmpty(enteredStreet)
    const enteredCityIsValid = notEmpty(enteredCity)
    const enteredPostalIsValid = hasFiveChars(enteredPostal)
    
    //infer validities as new values for the diff keys in the state obj
    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalIsValid
    })

    const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPostalIsValid

    //if form is invalid, skip out the onsubmit func, so the funcs of submitting data will not be run
    if (!formIsValid) {
      return 
    }

    //submit cart data

  }

  return (
    <form onSubmit={confirmHandler}>
      <div className={styles.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name</p>}
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
