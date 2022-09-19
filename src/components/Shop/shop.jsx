import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../../Routes/categories-preview/categories-preview";
import Category from "../../Routes/category/category";
import { getdocumentfromcollection } from "../../utils/firebase/firebase";
import { useEffect } from "react";
import { setCategories } from "../../store/category/category.action";
// import { useLayoutEffect } from "react";
// import { useState } from "react";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchdata() {
      const categories = await getdocumentfromcollection();
      // console.log(categories, " from shop component ");
      dispatch(setCategories(categories));
    }
    fetchdata();
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    </>
  );
};

export default Shop;
