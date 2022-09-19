import { createContext, useReducer } from "react";

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

const INITIAL_STATE = {
  cartcount: 0,
  carttotal: 0,
  cartItems: [],
  isCartOpen: false,
};
// for adding the cart items we first let see how the item structure look like it look like similar to product
//  like it had
//id , name  , price , imageUrl - product
//   but for cart item it will had
//  id , name , price , imageurl  and quantity
const CART_ACTIONS = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_CART_OPEN",
};

const Cartreducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTIONS.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTIONS.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };

    default:
      throw new Error(`unhandled type ${type} in Cartreducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ cartItems, isCartOpen, carttotal, cartcount }, dispatch] =
    useReducer(Cartreducer, INITIAL_STATE);

  const updateCartItemReducer = (newcartItems) => {
    const newcartTotal = newcartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    const newcartcount = newcartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );

    dispatch({
      type: CART_ACTIONS.SET_CART_ITEMS,
      payload: {
        cartItems: newcartItems,
        carttotal: newcartTotal,
        cartcount: newcartcount,
      },
    });
  };

  const additemtoCart = (productToadd) => {
    const newcartItems = addCartItem(cartItems, productToadd);
    updateCartItemReducer(newcartItems);
  };

  const removeitemtoCart = (productToremove) => {
    const newcartItems = removeCartitem(cartItems, productToremove);
    updateCartItemReducer(newcartItems);
  };

  const directremoveitem = (productToremove) => {
    const newcartItems = directremove(cartItems, productToremove);
    updateCartItemReducer(newcartItems);
  };
  const setisCartOpen = (bool) => {
    dispatch({ type: CART_ACTIONS.SET_IS_CART_OPEN, payload: bool });
  };

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
