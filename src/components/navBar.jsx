import { isLogin, setisLogin } from "../pages/login";
import "../css/bootstrap.min.css";
import "../css/style.css";
import "../css/sb-admin-2.min.css";
import { Routes, Route, useNavigate, A, useLocation } from "@solidjs/router";

export default function navbar() {
  const navigate = useNavigate();
  function logout() {
    setisLogin(false);
    localStorage.removeItem("isLogin");
    isLogin();
    navigate("/login");
  }
  return (
    <>
      <ul
        class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          class="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
          </div>
          <div class="sidebar-brand-text mx-3">Admin</div>
        </a>

        <hr class="sidebar-divider my-0" />

        <li class="nav-item active">
          <A class="nav-link" href="/">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </A>
        </li>

        <hr class="sidebar-divider" />

        <div class="sidebar-heading"></div>

        <li class="nav-item">
          <A class="nav-link collapsed" href="/Allusers">
            <span>All Users</span>
          </A>
          <A class="nav-link collapsed" href="/allProducts">
            <span>All Products</span>
          </A>
        </li>
        <hr class="sidebar-divider" />

        <li class="nav-item">
          <p
            style="cursor:pointer"
            class="nav-link collapsed"
            onClick={() => logout()}
          >
            <span>Logout</span>
          </p>
        </li>
      </ul>
    </>
  );
}
