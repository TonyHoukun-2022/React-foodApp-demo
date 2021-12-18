// this component is simply to manage the current context of cart data and provide that context to all components that want access to it.
import CartContext from "./cart-context"
import { useReducer } from "react"

//reducer function can put outside of component because no interval values of the CartProvider component is needed in reducer.
//receive a state object and an action automatically by React.

// The action is dispatched by
// state is simply the last state snapshotof the state managed by the reducer func.
// And then as part of the reducer function,
// you have to return a new state snapshot.

//initial the cartstate
const cartState = {
  items: [],
  totalAmount: 0,
}
const cartReducer = (state, action) => {
  // return the newest cartstate
  return cartState
}
const CartProvider = (props) => {
  //初始化cartstate作为初始值
  const [] = useReducer(cartReducer, cartState)
  const addItemToCartHandler = (item) => {}
  const removeItemFromCartHandler = (id) => {}
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  }
  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}
export default CartProvider
