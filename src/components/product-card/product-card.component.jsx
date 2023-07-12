import "./product-card.styles.scss";
import Button from "../button/button.component";
const ProductCard = ({ product, key }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container" key={key}>
      <img src={imageUrl} alt={`${name}`} />
      <span className="name">{name}</span>
      <span className="price">{price}</span>
      <Button buttonType="inverted">Add to cart</Button>
    </div>
  );
};

export default ProductCard;
