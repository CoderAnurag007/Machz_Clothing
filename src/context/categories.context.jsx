import { useState, useEffect } from "react";
import { createContext } from "react";
// import { SHOP_DATA } from "../shop-ata";
import {
  addcollectionData,
  getdocumentfromcollection,
} from "../utils/firebase/firebase";

export const CategoriesContext = createContext({
  CategoriesMap: {},
});

export const CategoryProvider = ({ children }) => {
  const [CategoriesMap, setCategoriesMap] = useState({});
  useEffect(() => {
    const getcategoriesMap = async () => {
      const categoryMap = await getdocumentfromcollection();
      setCategoriesMap(categoryMap);
    };
    getcategoriesMap();
  }, []);
  const value = { CategoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
