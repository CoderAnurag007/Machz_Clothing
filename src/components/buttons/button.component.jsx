//  1 . Default Button

// 2. Inverted Button

// 3. Google Signin Button
import { BaseButton, GoogleButton, InvertedButton } from "./button.style";
// import "./button.style.scss";

export const Button_type_classes = {
  base: "base",
  google: "google",
  inverted: "inverted",
};

const getbutton = (ButtonType = Button_type_classes.base) =>
  ({
    [Button_type_classes.base]: BaseButton,
    [Button_type_classes.google]: GoogleButton,
    [Button_type_classes.inverted]: InvertedButton,
  }[ButtonType]);

const Buttons = ({ children, buttonstyle, type, click }) => {
  const CustomButton = getbutton(buttonstyle);
  return (
    <CustomButton type={`${type}`} onClick={click}>
      {children}
    </CustomButton>
  );
};
export default Buttons;
