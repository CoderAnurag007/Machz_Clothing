import "./checkout-item.styles.jsx";
import { useContext } from "react";
import { cartcontext } from "../../context/cartcontext";
import {
  CheckOutItemContainer,
  CheckOutItemImageContainer,
  CheckOutQuantity,
  CheckOutRemoveButton,
  CheckOutNp,
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
        <CheckOutNp>{name}</CheckOutNp>
        <CheckOutQuantity>
          <div className="arrow" onClick={removeitemhandler}>
            &#10094;
          </div>
          {quantity}
          <div className="arrow" onClick={additemhandler}>
            &#10095;
          </div>
        </CheckOutQuantity>
        <CheckOutNp>${price}</CheckOutNp>
        <CheckOutRemoveButton onClick={() => directremoveitem(cartitem)}>
          &#x2717;
        </CheckOutRemoveButton>
      </CheckOutItemContainer>
    </>
  );
};

export default CheckoutItemComponent;
