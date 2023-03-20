import { Routes, Route, useNavigate, useLocation } from "@solidjs/router";
import Login from "../pages/login";
import { userDetails, getUserDetails, isLogin } from "../pages/login";
import Home from "../pages/Home";
import Allusers from "../pages/AllUsers";
import addUser from "../pages/addUser";
import userDetail from "../pages/userDetails";
import AllProducts from "../pages/AllProducts";
import ProductDetails from "../pages/ProductDetails";
import AddProduct from "../pages/AddProduct";
import { onMount } from "solid-js";
const routes = () => {
  const navigate = useNavigate();
  function requireAuth(component) {
    if (!isLogin()) {
      navigate("/login");
      return null;
    }
    if (isLogin()) {
      navigate("/");
    }
    return component;
  }
  return (
    <>
      <Routes>
        <Route path="/login" component={Login} />
        <Route path="/" component={requireAuth(Home)} />
        <Route path="/Allusers" component={requireAuth(Allusers)} />
        <Route path="/addUser" component={requireAuth(addUser)} />
        <Route path="/userDetails/:id" component={requireAuth(userDetail)} />
        <Route path="/allProducts" component={requireAuth(AllProducts)} />
        <Route
          path="/productDetails/:id"
          component={requireAuth(ProductDetails)}
        />
        <Route path="/addProduct" component={requireAuth(AddProduct)} />
      </Routes>
    </>
  );
};
export default routes;
