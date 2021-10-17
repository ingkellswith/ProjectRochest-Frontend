import { Link } from "react-router-dom";

interface ProductProps {
  id: number;
}

const ProductCard = (props: ProductProps) => {
  return (
    <Link to={`/product/${props.id}`} style={{ textDecoration: "none" }}>
      <div className="product-card">
        <img
          alt=""
          src="https://assets.supremenewyork.com/214358/zo/v5gL0tHq3Jo.jpg"
          className="product-img"
        ></img>
        <div className="product-company">슈프림</div>
        <div className="product-name">코듀로이 집 자켓</div>
        <div className="product-price">890,000</div>
        <div className="product-tag">
          <span>해외직구</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
