import "./card-dropdown.scss";
import Buttons from "../buttons/button.component";
import CartItem from "../cart-iems/cart-item";
import { useContext } from "react";
import { cartcontext } from "../../context/cartcontext";
const CardDropdown = () => {
  const { cartItems } = useContext(cartcontext);

  return (
    <>
      <div className="cart-dropdown-container">
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem Cartitem={item} key={item.id} />
          ))}
        </div>
        <Buttons children={"Go to CheckOut"} />
      </div>
    </>
  );
};

export default CardDropdown;
