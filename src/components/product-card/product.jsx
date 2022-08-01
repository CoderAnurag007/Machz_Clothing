import React from "react";
import Buttons from "../buttons/button.component";
import "./product.scss";
import { useContext } from "react";
import { cartcontext } from "../../context/cartcontext";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { additemtoCart } = useContext(cartcontext);

  const addProducttoCart = () => {
    console.log("clicked");
    additemtoCart(product);
  };
  return (
    <>
      <div className="product-card-container">
        <img src={imageUrl} alt={name} />
        <div className="footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
        <Buttons
          buttonstyle={"inverted"}
          children={"Add to Cart"}
          click={addProducttoCart}
        />
      </div>
    </>
  );
};

export default ProductCard;
