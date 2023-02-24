import Navbar from "./components/navBar";
import Routes from "./routes/routes";
import { createSignal, createEffect, onCleanup } from "solid-js";
import { isLogin } from "./pages/login";
import toast, { Toaster } from "solid-toast";
import Header from "./components/Header";
import "./style/sideNav.css";
function App() {
  const [state, setstate] = createSignal();
  createEffect(() => {
    setstate(isLogin());
  });
  onCleanup(() => {
    localStorage.removeItem('isLogin')
  });

  return (
    <div>
      <Toaster />
      <Show when={state()}>
        <div class="sidenav">
          <Navbar />
        </div>
      </Show>
      <div class={isLogin() ? "main" : "no class"}>
        <Show when={state()}>
          <Header />
        </Show>
        <Routes />
      </div>
    </div>
  );
}

export default App;
