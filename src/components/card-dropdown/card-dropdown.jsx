import "./card-dropdown.scss";
import Buttons from "../buttons/button.component";

const CardDropdown = () => {
  return (
    <>
      <div className="cart-dropdown-container">
        <div className="cart-items" />
        <Buttons children={"Go to CheckOut"} />
      </div>
    </>
  );
};

export default CardDropdown;
