import { createContext } from "react"
const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearItemsInCart: () => {},
})
export default CartContext

// import { createContext } from "react"
// const Context = createContext("Default Value")
