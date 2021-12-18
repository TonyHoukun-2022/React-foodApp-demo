import CartIcon from "../Cart/CartIcon"
import 
const HeaderCartButton = props => {
    return (
        <button>
            <span>
                <CartIcon></CartIcon>
            </span>
            <span>Your cart</span>
            <span>4</span>
        </button>
    )
 }
export default HeaderCartButton