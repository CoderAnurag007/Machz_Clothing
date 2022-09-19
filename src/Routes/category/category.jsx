import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../../components/product-card/product";
import { CategoryItemContainer, CategoryHead } from "./category.style";
import { useSelector } from "react-redux";
import { categroymapselector } from "../../store/category/category.selector";

const Category = () => {
  const { category } = useParams();
  const CategoriesMap = useSelector(categroymapselector);
  console.log(CategoriesMap, "from category");
  const [products, setproducts] = useState([]);

  useEffect(() => {
    setproducts(CategoriesMap[category]);
  }, [category, CategoriesMap]);

  return (
    <>
      <CategoryHead className="category-title-head">
        {category.toUpperCase()}
      </CategoryHead>
      <CategoryItemContainer>
        {products &&
          products.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
      </CategoryItemContainer>
    </>
  );
};

export default Category;
