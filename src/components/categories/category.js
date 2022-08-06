import Directory from "../Directory/directory.component";
import categories from "./categorymenu";

const Category = () => {
  return (
    <>
      <Directory categories={categories} />
    </>
  );
};

export default Category;
