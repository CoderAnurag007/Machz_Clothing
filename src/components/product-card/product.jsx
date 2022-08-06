import React from "react";
import Buttons, { Button_type_classes } from "../buttons/button.component";
import "./product.styles.jsx";
import { useContext } from "react";
import { cartcontext } from "../../context/cartcontext";
import {
  ProductImage,
  ProductCardContainer,
  ProductFooter,
  Name,
  Price,
} from "./product.styles.jsx";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { additemtoCart } = useContext(cartcontext);

  const addProducttoCart = () => {
    console.log("clicked");
    additemtoCart(product);
  };
  return (
    <>
      <ProductCardContainer>
        <ProductImage src={imageUrl} alt={name} />
        <ProductFooter>
          <Name>{name}</Name>
          <Price>{price}</Price>
        </ProductFooter>
        <Buttons
          buttonstyle={Button_type_classes.inverted}
          children={"Add to Cart"}
          click={addProducttoCart}
        />
      </ProductCardContainer>
    </>
  );
};

export default ProductCard;
