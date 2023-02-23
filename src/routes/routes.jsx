import { Routes, Route, useNavigate, useLocation } from "@solidjs/router";
import { createSignal, createEffect } from "solid-js";
import Login from "../pages/login";
import { isLogin } from "../pages/login";
import Home from "../pages/Home";
import Allusers from "../pages/AllUsers";
import addUser from '../pages/addUser'
import userDetails from '../pages/userDetails'
import AllProducts from "../pages/AllProducts";
import ProductDetails from "../pages/ProductDetails";
import AddProduct from '../pages/AddProduct'
const routes = () => {
  const [state, setstate] = createSignal();
  createEffect(() => {
    setstate(isLogin());
  });
  const navigate = useNavigate();
  function requireAuth(component) {
    if (!state()) {
      navigate("/login");
      return null;
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
        <Route path="/userDetails/:id" component={requireAuth(userDetails)} />
        <Route path="/allProducts" component={requireAuth(AllProducts)} />
        <Route path="/productDetails/:id" component={requireAuth(ProductDetails)} />
        <Route path="/addProduct" component={requireAuth(AddProduct)} />
      </Routes>
    </>
  );
};
export default routes;
