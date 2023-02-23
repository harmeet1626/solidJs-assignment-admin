import { isLogin, setisLogin } from "../pages/login";
import "../css/bootstrap.min.css";
import "../css/style.css";
import "../css/sb-admin-2.min.css";
import { Routes, Route, useNavigate, A, useLocation } from "@solidjs/router";

export default function navbar() {
  const navigate = useNavigate();
  function logout() {
    setisLogin(false);
    isLogin();
    navigate("/login");
  }
  return (
    <>
      {/* <div
        class="container-fluid bg-white sticky-top"
        style=" color:gray; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"
      >
        <div class="container" >
          <nav class="navbar navbar-expand-lg bg-white navbar-light p-lg-0" style="height: 34px;">
            <a href="index.html" class="navbar-brand d-lg-none">
              <h1 class="fw-bold m-0">GrowMark</h1>
            </a>
            <button
              type="button"
              class="navbar-toggler me-0"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <div class="navbar-nav">
                <A href="/" class="nav-item nav-link">
                  Home
                </A>
                <A href="/Allusers" class="nav-item nav-link">
                  All Users
                </A>
                <A href="/addUser" class="nav-item nav-link">
                  Add Users
                </A>
                
              </div>
              <div class="ms-auto d-none d-lg-block">
                <a
                  onClick={() => logout()}
                  class="btn btn-primary rounded-pill py-2 px-3"
                >
                  logout
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <br></br> */}
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
          <A
            class="nav-link collapsed"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
            href="/Allusers"
          >
            <span>All Users</span>
          </A>
          <A
            class="nav-link collapsed"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
            href="/addUser"
          >
            <span>Add User</span>
          </A>
          <A
            class="nav-link collapsed"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
            href="/allProducts"
          >
            <span>All Products</span>
          </A>
          <A
            class="nav-link collapsed"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
            href="/addProduct"
          >
            <span>Add Products</span>
          </A>
        </li>
        <hr class="sidebar-divider" />

        <li class="nav-item">
          <p
            style="cursor:pointer"
            class="nav-link collapsed"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
            onClick={() => logout()}
          >
            <span>Logout</span>
          </p>
        </li>
      </ul>
    </>
  );
}
