import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { cartcontext } from "../../context/cartcontext";
import { useContext } from "react";

const CartIcon = () => {
  const { isCartOpen, setisCartOpen } = useContext(cartcontext);
  const toggle = () => setisCartOpen(!isCartOpen);
  return (
    <>
      <div className="cart-icon-container" onClick={toggle}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">0</span>
      </div>
    </>
  );
};

export default CartIcon;
