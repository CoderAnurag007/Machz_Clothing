import Category from "../../components/categories/category";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Category />
      <Outlet />
    </>
  );
};

export default Home;
