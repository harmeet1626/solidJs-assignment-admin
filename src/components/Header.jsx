import { Routes, Route, useNavigate, A, useLocation } from "@solidjs/router";
import "../css/bootstrap.min.css";
import "../css/style.css";
import '../css/sb-admin-2.min.css'
const header = () => {

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
            <nav class="navbar navbar-light" style="background-color:#4e73df;">
                <a class="navbar-brand" >
                    <img src="https://cdn-icons-png.flaticon.com/512/813/813896.png" width="30" height="30" alt="" />
                </a>
                <A href="/" class="nav-item nav-link">
                                    Home
                                </A>
                                <A href="/Allusers" class="nav-item nav-link">
                                    All Users
                                </A>
                                <A href="/addUser" class="nav-item nav-link">
                                    Add Users
                                </A>
            </nav>
        </>
    )
}
export default header