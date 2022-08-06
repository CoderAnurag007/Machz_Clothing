import { useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview";
const CategoriesPreview = () => {
  const { CategoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(CategoriesMap).map((categoryname) => {
        const product = CategoriesMap[categoryname];
        console.log(CategoriesMap);
        return (
          <CategoryPreview
            key={categoryname[0]}
            product={product}
            categoryname={categoryname}
          />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
