import React from "react";
import Buttons from "../buttons/button.component";
import "./product.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <>
      <div className="product-card-container">
        <img src={imageUrl} alt={name} />
        <div className="footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
        <Buttons buttonstyle={"inverted"} children={"Add to Cart"} />
      </div>
    </>
  );
};

export default ProductCard;
