import Directory from "../Directory/directory.component";
import "./category.style.scss";
import categories from "./categorymenu";

const Category = () => {
  return (
    <>
      <Directory categories={categories} />
      <div>
        <h1>This is An ecommerce app</h1>
      </div>
    </>
  );
};

export default Category;
