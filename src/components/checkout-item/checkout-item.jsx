import "./checkout-item.styles.jsx";
import { useContext } from "react";
import { cartcontext } from "../../context/cartcontext";
import {
  CheckOutItemContainer,
  CheckOutItemImageContainer,
  CheckOutQuantity,
  CheckOutRemoveButton,
  CheckOut_NP,
} from "./checkout-item.styles.jsx";

const CheckoutItemComponent = ({ cartitem }) => {
  const { name, quantity, price, imageUrl } = cartitem;
  const { additemtoCart, removeitemtoCart } = useContext(cartcontext);
  const additemhandler = () => {
    additemtoCart(cartitem);
  };
  const removeitemhandler = () => {
    removeitemtoCart(cartitem);
  };

  const { directremoveitem } = useContext(cartcontext);
  return (
    <>
      <CheckOutItemContainer>
        <CheckOutItemImageContainer>
          <img src={imageUrl} alt="" />
        </CheckOutItemImageContainer>
        <CheckOut_NP>{name}</CheckOut_NP>
        <CheckOutQuantity>
          <div className="arrow" onClick={removeitemhandler}>
            &#10094;
          </div>
          {quantity}
          <div className="arrow" onClick={additemhandler}>
            &#10095;
          </div>
        </CheckOutQuantity>
        <CheckOut_NP>${price}</CheckOut_NP>
        <CheckOutRemoveButton onClick={() => directremoveitem(cartitem)}>
          &#x2717;
        </CheckOutRemoveButton>
      </CheckOutItemContainer>
    </>
  );
};

export default CheckoutItemComponent;
