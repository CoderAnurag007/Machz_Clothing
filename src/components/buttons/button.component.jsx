//  1 . Default Button

// 2. Inverted Button

// 3. Google Signin Button
import "./button.style.scss";
const ButtonType = {
  google: "google-sign-in",
  inverted: "inverted",
  default: "default-btn",
};

const Buttons = ({ children, buttontype }) => {
  return (
    <button className={`button-container ${ButtonType[buttontype]}`}>
      {children}
    </button>
  );
};
export default Buttons;
