import Navbar from './components/navBar'
import Routes  from './routes/routes'
import { isLogin } from './pages/login';
import toast, { Toaster } from 'solid-toast';
function App() {
  return (
    <div>
      <Toaster/>
      <Show when={isLogin() == true}>
        <Navbar />
      </Show>
      <Routes/>
    </div>
  );
}

export default App;
