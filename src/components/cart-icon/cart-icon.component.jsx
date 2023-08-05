import { ReactComponent as ShoppingIcon } from "../../assets/images/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { CartContext } from "../context/cart.context";
import { useContext } from "react";
import CartItem from "../cart-item/cart-item.component";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartTotal } = useContext(CartContext);

  const toogleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="cart-icon-container" onClick={toogleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartTotal}</span>
    </div>
  );
};

export default CartIcon;
