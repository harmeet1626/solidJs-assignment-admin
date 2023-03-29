import { Routes, Route } from "@solidjs/router";
import Login from "../pages/login";
import Home from "../pages/Home";
import Allusers from "../pages/AllUsers";
import addUser from "../pages/addUser";
import userDetail from "../pages/userDetails";
import AllProducts from "../pages/AllProducts";
import ProductDetails from "../pages/ProductDetails";
import AddProduct from "../pages/AddProduct";
const routes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
        <Route path="/Allusers" component={Allusers} />
        <Route path="/addUser" component={addUser} />
        <Route path="/userDetails/:id" component={userDetail} />
        <Route path="/allProducts" component={AllProducts} />
        <Route path="/productDetails/:id" component={ProductDetails} />
        <Route path="/addProduct" component={AddProduct} />
      </Routes>
    </>
  );
};
export default routes;
