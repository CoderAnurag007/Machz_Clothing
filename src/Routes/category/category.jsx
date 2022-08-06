// import "./category.style.scss";

import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";
import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../../components/product-card/product";
import { CategoryItemContainer, CategoryHead } from "./category.style";

const Category = () => {
  const { category } = useParams();
  const { CategoriesMap } = useContext(CategoriesContext);
  const [products, setproducts] = useState([]);

  useEffect(() => {
    console.log(CategoriesMap);
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
