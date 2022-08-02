import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import { cartcontext } from "../../context/cartcontext";
import "./checkout.scss";

const CheckOut = () => {
  const { cartItems, carttotal } = useContext(cartcontext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartitem) => {
        return <CheckoutItem cartitem={cartitem} key={cartitem.id} />;
      })}
      <span className="total">Total : ${carttotal}</span>
    </div>
  );
};

export default CheckOut;
