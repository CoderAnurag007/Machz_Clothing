import ProductCard from "../product-card/product";
import {
  CategoryPreviewBox,
  CategoryPreviewContainer,
  CategoryPreviewTitle,
} from "./category-preview.styles";
const CategoryPreview = ({ categoryname, product }) => {
  console.log(product);
  return (
    <>
      <CategoryPreviewContainer>
        <h2>
          <CategoryPreviewTitle to={categoryname}>
            {categoryname.toUpperCase()} &#8594;
          </CategoryPreviewTitle>
        </h2>

        <CategoryPreviewBox>
          {product
            .filter((_, index) => index < 4)
            .map((product) => {
              return <ProductCard product={product} />;
            })}
        </CategoryPreviewBox>
      </CategoryPreviewContainer>
    </>
  );
};

export default CategoryPreview;
