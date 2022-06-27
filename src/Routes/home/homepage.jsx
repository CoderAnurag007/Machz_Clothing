import "../../components/categories/category.style.scss";
import Category from "../../components/categories/category";
import { Outlet } from "react-router-dom";
// import "./mystyles.style.scss";

const Home = () => {
  return (
    <>
      <Category />
      <Outlet />
    </>
  );
};

export default Home;
