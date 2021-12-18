import React from "react"
import Header from "./components/Layout/Header"
import Meals from "./components/Meals/Meals"
import ShoppingCart from "./components/Cart/ShoppingCart"
function App() {
  return (
    <>
      <ShoppingCart></ShoppingCart>
      <Header></Header>
      <main>
        <Meals></Meals>
      </main>
    </>
  )
}

export default App
