// this component is simply to manage the current context of data and provide that context to all components that want access to it.
import CartContext from "./cart-context"
const CartProvider = (props) => {
  return <CartContext.Provider></CartContext.Provider>
}
export default CartProvider
