import "./checkout-item.styles.scss";
import { useContext } from "react";
import { cartcontext } from "../../context/cartcontext";

const CheckoutItem = ({ cartitem }) => {
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
      <div className="checkout-item-container">
        <div className="image-container">
          <img src={imageUrl} alt="" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
          <div className="arrow" onClick={removeitemhandler}>
            &#10094;
          </div>
          {quantity}
          <div className="arrow" onClick={additemhandler}>
            &#10095;
          </div>
        </span>
        <span className="price">${price}</span>
        <div
          className="remove-button"
          onClick={() => directremoveitem(cartitem)}
        >
          &#x2717;
        </div>
      </div>
    </>
  );
};

export default CheckoutItem;
