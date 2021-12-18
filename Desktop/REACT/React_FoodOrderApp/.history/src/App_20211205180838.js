import React,{useState} from "react"
import Header from "./components/Layout/Header"
import Meals from "./components/Meals/Meals"
import ShoppingCart from "./components/Cart/ShoppingCart"
function App() {
  const [cartIsShown, setCartIsShown] = useState(false)
  const showCartHandler = () => {
    setCartIsShown(true)
  }
  const hideCartHandler = () => {
    setCartIsShown(false)
  }
  return (
    <>
      {cartIsShown && <ShoppingCart onClose={hideCartHandler}></ShoppingCart> }
      <Header onShowCart={showCartHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </>
  )
}

export default App
