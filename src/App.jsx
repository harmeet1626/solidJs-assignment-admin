import Navbar from "./components/navBar";
import Routes from "./routes/routes";
import { onMount } from "solid-js";
import { getUserDetails, isLogin, userDetails } from "./pages/login";
import { Toaster } from "solid-toast";
import Header from "./components/Header";
import "./style/sideNav.css";
function App() {
  onMount(() => {
    getUserDetails();
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
