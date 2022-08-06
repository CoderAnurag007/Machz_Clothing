import Buttons from "../buttons/button.component";
import CartItem from "../cart-iems/cart-item";
import { useContext } from "react";
import { cartcontext } from "../../context/cartcontext";
import { useNavigate } from "react-router-dom";
import { CartDropdownContainer, Cartitemsbox } from "./card-dropdown.style";
const CardDropdown = () => {
  const { cartItems } = useContext(cartcontext);
  const navigate = useNavigate();

  const handlecheckout = async () => {
    navigate("/checkout");
  };
  return (
    <>
      <CartDropdownContainer>
        <Cartitemsbox>
          {cartItems.map((item) => (
            <CartItem Cartitem={item} key={item.id} />
          ))}
        </Cartitemsbox>
        <Buttons children={"Go to CheckOut"} click={handlecheckout} />
      </CartDropdownContainer>
    </>
  );
};

export default CardDropdown;
