import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../../Routes/categories-preview/categories-preview";
import Category from "../../Routes/category/category";

const Shop = () => {
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
