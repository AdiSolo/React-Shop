import "./product-card.styles.scss";
import Button from "../button/button.component";
import { CartContext } from "../context/cart.context";
import { useContext } from "react";
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <span className="name">{name}</span>
      <span className="price">{price}</span>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
