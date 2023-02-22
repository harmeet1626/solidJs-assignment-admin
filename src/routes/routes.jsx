import { Routes, Route, useNavigate, useLocation } from "@solidjs/router";
import Login from "../pages/login";
import { isLogin } from "../pages/login";
import Home from "../pages/Home";
import Allusers from "../pages/AllUsers";
import addUser from '../pages/addUser'
import userDetails from '../pages/userDetails'

const routes = () => {
  const navigate = useNavigate();
  function requireAuth(component) {
    if (!isLogin()) {
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
      </Routes>
    </>
  );
};
export default routes;
