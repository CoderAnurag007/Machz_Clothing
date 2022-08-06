import { useContext } from "react";
import CheckoutItemComponent from "../../components/checkout-item/checkout-item";
import { cartcontext } from "../../context/cartcontext";
import {
  CheckOutContainer,
  CheckOutHeader,
  CheckOutHeaderBlock,
  CheckOutTotal,
} from "./checkout.style";

const CheckOut = () => {
  const { cartItems, carttotal } = useContext(cartcontext);

  return (
    <CheckOutContainer>
      <CheckOutHeader>
        <CheckOutHeaderBlock>
          <span>Product</span>
        </CheckOutHeaderBlock>
        <CheckOutHeaderBlock>
          <span>Description</span>
        </CheckOutHeaderBlock>
        <CheckOutHeaderBlock>
          <span>Quantity</span>
        </CheckOutHeaderBlock>
        <CheckOutHeaderBlock>
          <span>Price</span>
        </CheckOutHeaderBlock>
        <CheckOutHeaderBlock>
          <span>Remove</span>
        </CheckOutHeaderBlock>
      </CheckOutHeader>
      {cartItems.map((cartitem) => {
        return <CheckoutItemComponent cartitem={cartitem} key={cartitem.id} />;
      })}
      <CheckOutTotal>Total : ${carttotal}</CheckOutTotal>
    </CheckOutContainer>
  );
};

export default CheckOut;
