import { useState, useEffect } from "react";
import { createContext } from "react";
import {
  createUserDocumentFromAuth,
  onAuthchangedlistener,
} from "../utils/firebase/firebase";
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const Userprovider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthchangedlistener((user) => {
      console.log(user);
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
