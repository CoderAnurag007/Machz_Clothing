import { createContext, useState } from "react";

export const cartcontext = createContext({
  isCartOpen: false,
  setisCartOpen: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setisCartOpen] = useState(false);
  const value = { isCartOpen, setisCartOpen };

  return <cartcontext.Provider value={value}>{children}</cartcontext.Provider>;
};
