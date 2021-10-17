const ProductDetailPresenter = (props) => {
  return (
    <div className="product-detail-container">
      <div className="product-detail-info">
        <img
          alt=""
          src="https://assets.supremenewyork.com/214358/zo/v5gL0tHq3Jo.jpg"
          className="product-img"
        ></img>
        <div className="product-detail-info-side-container">
          <div className="product-company">슈프림</div>
          <div className="product-name">코듀로이 집 자켓</div>
          <div className="product-price">890,000원</div>
          <div className="product-tag">
            <span>해외직구</span>
          </div>
          <div className="product-benefit">
            <span>혜택</span>
            <span>
              <span className="bold">57p</span>적립
            </span>
          </div>
          <div className="product-delivery">
            <span>배송</span>
            <span>
              <span className="bold">무료배송</span>
            </span>
          </div>
          <div className="product-button-container">
            <div className="button cart">장바구니</div>
            <div className="button purchase">바로구매</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPresenter;
