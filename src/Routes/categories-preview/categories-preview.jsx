import CategoryPreview from "../../components/category-preview/category-preview";
import { useSelector } from "react-redux";
import { categroymapselector } from "../../store/category/category.selector";
const CategoriesPreview = () => {
  const CategoriesMap = useSelector(categroymapselector);
  return (
    <>
      {Object.keys(CategoriesMap).map((categoryname) => {
        const product = CategoriesMap[categoryname];
        console.log(CategoriesMap);
        return (
          product && (
            <CategoryPreview
              key={categoryname[0]}
              product={product}
              categoryname={categoryname}
            />
          )
        );
      })}
    </>
  );
};

export default CategoriesPreview;
