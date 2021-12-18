// this component is simply to manage the current context of cart data and provide that context to all components that want access to it.
import CartContext from "./cart-context"
const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {}
  const removeItemFromCartHandler = (id) => {}
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  }
  return <CartContext.Provider>{props.children}</CartContext.Provider>
}
export default CartProvider
