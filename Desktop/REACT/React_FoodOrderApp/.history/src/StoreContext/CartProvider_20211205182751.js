// this component is simply to manage the current context of cart data and provide that context to all components that want access to it.
import CartContext from "./cart-context"
const CartProvider = (props) => {
  const cartContext = {
    items: [],
  }
  return <CartContext.Provider>{props.children}</CartContext.Provider>
}
export default CartProvider
