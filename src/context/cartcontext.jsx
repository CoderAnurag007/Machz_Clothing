import { useEffect } from "react";
import { createContext, useState } from "react";

const addCartItem = (cartItems, productToadd) => {
  // find product in cart item
  console.log("adding ");
  const existingCartitem = cartItems.find(
    (item) => item.id === productToadd.id
  );

  // if found increment quantity
  if (existingCartitem) {
    return cartItems.map((cartitem) => {
      if (cartitem.id === productToadd.id) {
        console.log("found new");
        return { ...cartitem, quantity: cartitem.quantity + 1 };
      } else {
        return cartitem;
      }
    });
  }
  // return new array of modified cart item
  console.log("New item forming");
  return [...cartItems, { ...productToadd, quantity: 1 }];
};

export const cartcontext = createContext({
  isCartOpen: false,
  setisCartOpen: () => {},
  cartItems: [],
  additemtoCart: () => {},
  cartcount: 0,
});

// for adding the cart items we first let see how the item structure look like it look like similar to product
//  like it had
//id , name  , price , imageUrl - product
//   but for cart item it will had
//  id , name , price , imageurl  and quantity

export const CartProvider = ({ children }) => {
  const [isCartOpen, setisCartOpen] = useState(false);
  const [cartItems, setcartItems] = useState([]);
  const [cartcount, setcartcount] = useState(0);
  const additemtoCart = (productToadd) => {
    console.log(cartItems + "function additemtocart");
    setcartItems(addCartItem(cartItems, productToadd));
  };

  useEffect(() => {
    const newcartcount = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setcartcount(newcartcount);
  }, [cartItems]);

  const value = {
    isCartOpen,
    setisCartOpen,
    additemtoCart,
    cartItems,
    cartcount,
  };

  return <cartcontext.Provider value={value}>{children}</cartcontext.Provider>;
};
