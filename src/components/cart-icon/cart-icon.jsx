import { cartcontext } from "../../context/cartcontext";
import { useContext } from "react";
import {
  CartIconContainer,
  Counter,
  ShoppingIconbox,
} from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setisCartOpen, cartcount } = useContext(cartcontext);
  const toggle = () => setisCartOpen(!isCartOpen);
  return (
    <>
      <CartIconContainer onClick={toggle}>
        <ShoppingIconbox />
        <Counter>{cartcount}</Counter>
      </CartIconContainer>
    </>
  );
};

export default CartIcon;
