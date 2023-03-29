import Navbar from "./components/navBar";
import Routes from "./routes/routes";
import { useNavigate } from "@solidjs/router";
import { onMount } from "solid-js";
import {
  getUserDetails,
  isLogin,
  setisLogin,
  userDetails,
} from "./pages/login";
import { Toaster } from "solid-toast";
import Header from "./components/Header";
import "./style/sideNav.css";
function App() {
  const navigate = useNavigate();
  onMount(() => {
    getUserDetails();
    if (userDetails.id) {
      setisLogin(true);
    } else {
      navigate("/login");
    }
  });

  return (
    <div>
      <Toaster />
      <Show when={isLogin()}>
        <div class="sidenav">
          <Navbar />
        </div>
      </Show>
      <div class={isLogin() == true ? "main" : "no class"}>
        <Show when={isLogin()}>
          <Header />
        </Show>
        <Routes />
      </div>
    </div>
  );
}

export default App;
