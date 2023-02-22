import Navbar from './components/navBar'
import Routes  from './routes/routes'
import { isLogin } from './pages/login';
function App() {
  return (
    <div>
      <Show when={isLogin() == true}>
        <Navbar />
      </Show>
      <Routes/>
    </div>
  );
}

export default App;
