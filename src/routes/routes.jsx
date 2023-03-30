import { Routes, Route, useRoutes } from "@solidjs/router";
import Login from "../pages/login";
import Home from "../pages/Home";
import Allusers from "../pages/AllUsers";
import addUser from "../pages/addUser";
import userDetail from "../pages/userDetails";
import AllProducts from "../pages/AllProducts";
import ProductDetails from "../pages/ProductDetails";
import AddProduct from "../pages/AddProduct";
const routes = () => {
  const routes = [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/Allusers",
      component: Allusers,
    },
    {
      path: "/addUser",
      component: addUser,
    },
    {
      path: "/userDetails/:id",
      component: userDetail,
    },
    {
      path: "/allProducts",
      component: AllProducts,
    },
    {
      path: "/productDetails/:id",
      component: ProductDetails,
    },
    {
      path: "/addProduct",
      component: AddProduct,
    },
  ];
  const Routes = useRoutes(routes);
  return (
    <>
      <Routes>
        <Routes />
      </Routes>
    </>
  );
};
export default routes;
