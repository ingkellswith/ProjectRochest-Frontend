import ProductCard from "../../component/product/ProductCard";

const ProductsPresenter = (props) => {
  return (
    <div className="products">
      <div className="products-list">
        <ProductCard id={1} />
        <ProductCard id={1} />
        <ProductCard id={1} />
        <ProductCard id={1} />
      </div>
    </div>
  );
};

export default ProductsPresenter;
