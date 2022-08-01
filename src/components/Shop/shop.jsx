// import Shop_data from "../../shop_data.json";
import { useContext } from "react";
import { ProductsContext } from "../../context/product_context";
import ProductCard from "../product-card/product";
import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;
