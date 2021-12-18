// this component is simply to manage the current context of cart data and provide that context to all components that want access to it.
import CartContext from "./cart-context"
import { useReducer } from "react"

//reducer function can put outside of component because no interval values of the CartProvider component is needed in reducer.
//receive a state object and an action automatically by React.

// The action is dispatched by dispatchCartAction inside the Component
// state is simply the last state snapshotof the state managed by the reducer func.
// And then as part of the reducer function,
// you have to return a new state snapshot.

//initial the cartstate
const defaultCartState = {
  items: [],
  totalAmount: 0,
}
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat()
  }
  // return the newest cartstate
  return defaultCartState
}
const CartProvider = (props) => {
  //初始化cartstate作为初始值
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item })
  }
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id })
  }
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  }
  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}
export default CartProvider
