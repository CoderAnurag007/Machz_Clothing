import { useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview";
const CategoriesPreview = () => {
  const { CategoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(CategoriesMap).map((categoryname) => {
        const product = CategoriesMap[categoryname];
        return (
          <CategoryPreview
            product={product}
            categoryname={categoryname}
            key={categoryname}
          />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
