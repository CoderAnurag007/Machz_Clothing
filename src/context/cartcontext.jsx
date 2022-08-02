import { useEffect } from "react";
import { createContext, useState } from "react";

const addCartItem = (cartItems, productToadd) => {
  // find product in cart item
  const existingCartitem = cartItems.find(
    (item) => item.id === productToadd.id
  );
  // if found increment quantity
  if (existingCartitem) {
    return cartItems.map((cartitem) => {
      if (cartitem.id === productToadd.id) {
        return { ...cartitem, quantity: cartitem.quantity + 1 };
      } else {
        return cartitem;
      }
    });
  }
  // return new array of modified cart item
  return [...cartItems, { ...productToadd, quantity: 1 }];
};

const removeCartitem = (cartItems, productToremove) => {
  const existingCartitem = cartItems.find(
    (item) => item.id === productToremove.id
  );

  // now remove item if quantity is 1
  if (existingCartitem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToremove.id);
  }

  // now if quantity is more than 1 decrement it

  return cartItems.map((cartitem) => {
    if (cartitem.id === productToremove.id) {
      return { ...cartitem, quantity: cartitem.quantity - 1 };
    } else {
      return cartitem;
    }
  });
};

const directremove = (cartItems, productToremove) => {
  const existingCartitem = cartItems.find(
    (item) => item.id === productToremove.id
  );
  if (existingCartitem) {
    return cartItems.filter((cartItem) => cartItem.id !== productToremove.id);
  }
};

export const cartcontext = createContext({
  isCartOpen: false,
  setisCartOpen: () => {},
  cartItems: [],
  additemtoCart: () => {},
  removeitemtoCart: () => {},
  directremoveitem: () => {},
  cartcount: 0,
  carttotal: 0,
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
  const [carttotal, setcarttotal] = useState(0);
  const additemtoCart = (productToadd) => {
    setcartItems(addCartItem(cartItems, productToadd));
  };

  const removeitemtoCart = (productToremove) => {
    setcartItems(removeCartitem(cartItems, productToremove));
  };

  const directremoveitem = (productToremove) => {
    setcartItems(directremove(cartItems, productToremove));
  };

  useEffect(() => {
    const newcartcount = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setcartcount(newcartcount);
  }, [cartItems]);

  useEffect(() => {
    const newcartTotal = cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    setcarttotal(newcartTotal);
  }, [cartItems]);

  const value = {
    isCartOpen,
    setisCartOpen,
    additemtoCart,
    removeitemtoCart,
    directremoveitem,
    cartItems,
    cartcount,
    carttotal,
  };

  return <cartcontext.Provider value={value}>{children}</cartcontext.Provider>;
};
