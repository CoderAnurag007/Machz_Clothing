import "./card-dropdown.scss";
import Buttons from "../buttons/button.component";
import CartItem from "../cart-iems/cart-item";
import { useContext } from "react";
import { cartcontext } from "../../context/cartcontext";
import { useNavigate } from "react-router-dom";
const CardDropdown = () => {
  const { cartItems } = useContext(cartcontext);
  const navigate = useNavigate();

  const handlecheckout = async () => {
    navigate("/checkout");
  };
  return (
    <>
      <div className="cart-dropdown-container">
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem Cartitem={item} />
          ))}
        </div>
        <Buttons children={"Go to CheckOut"} click={handlecheckout} />
      </div>
    </>
  );
};

export default CardDropdown;
