import Navbar from './components/navBar'
import Routes  from './routes/routes'
import { isLogin } from './pages/login';
import toast, { Toaster } from 'solid-toast';
import Header from './components/Header'
import "./style/sideNav.css"
function App() {
  return (
    <div>
      <Toaster/>
      <Show when={isLogin() == true}>
      <div class="sidenav">
        <Navbar />
        </div>
      </Show>
      <div class={isLogin()? "main":"no class"}>
      <Show when={isLogin() == true}>
      <Header/>
      </Show>
      <Routes/></div>
    </div>
  );
}

export default App;
