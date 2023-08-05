import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import { CartContext } from "../context/cart.context";
import { useContext } from "react";
import CartItem from "../cart-item/cart-item.component";
import { Link } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Link to="checkout">
        <Button>Got to Checkout</Button>
      </Link>
    </div>
  );
};

export default CartDropdown;
