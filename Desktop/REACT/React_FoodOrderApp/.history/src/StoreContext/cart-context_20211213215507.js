import { createContext } from "react"
const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clear,
})
export default CartContext

// import { createContext } from "react"
// const Context = createContext("Default Value")
