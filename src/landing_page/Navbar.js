import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {

    const location = useLocation();

    const closeNavbar = () => {
        const navbar = document.getElementById("navbarSupportedContent");

        if (navbar.classList.contains("show")) {
            navbar.classList.remove("show");
        }
    };

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <nav
            className="navbar navbar-expand-lg border-bottom sticky-top"
            style={{
                backgroundColor: "#FFF",
                width: "100%",
                height:"80px",
                padding: "0",
            }}
        >
            <div
                className="w-100 d-flex align-items-center justify-content-between px-3 py-2"
            >

                <Link className="navbar-brand d-flex align-items-center m-0" to="/homepage">
                    <img
                        src="media/images/logo.png"
                        alt="Logo"
                        style={{width: "150px",objectFit: "contain"}}
                    />
                </Link>

                <button
                    className="navbar-toggler shadow-none border-0 p-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

            </div>

            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3 text-center">

                    <li className="nav-item">
                        <Link
                            className={`nav-link ${isActive("/") ? "active-link" : ""}`}
                            to="/homepage"
                            onClick={closeNavbar}
                        >
                            Home
                        </Link>
                    </li>


                    <li className="nav-item">
                        <Link
                            className={`nav-link ${isActive("/AboutPage") ? "active-link" : ""}`}
                            to="/AboutPage"
                            onClick={closeNavbar}
                        >
                            About
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            className={`nav-link ${isActive("/ProductsPage") ? "active-link" : ""}`}
                            to="/ProductsPage"
                            onClick={closeNavbar}
                        >
                            Product
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            className={`nav-link ${isActive("/PricingPage") ? "active-link" : ""}`}
                            to="/PricingPage"
                            onClick={closeNavbar}
                        >
                            Pricing
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            className={`nav-link ${isActive("/SupportPage") ? "active-link" : ""}`}
                            to="/SupportPage"
                            onClick={closeNavbar}
                        >
                            Support
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            className={`nav-link ${isActive("/Signup") ? "active-link" : ""}`}
                            to="/Signup"
                            onClick={closeNavbar}
                        >
                            Signup
                        </Link>
                    </li>

                </ul>
            </div>

            <style>{`
                .nav-link {
                    position: relative;
                    font-weight: 500;
                    color: #444 !important;
                    transition: all 0.3s ease;
                }

                .nav-link:hover {
                    color: #387ed1 !important;
                }

                .active-link {
                    color: #387ed1 !important;
                }

                .active-link::after {
                    content: "";
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 2px;
                    background-color: #387ed1;
                    border-radius: 10px;
                }

                @media (max-width: 991px) {

                    .navbar-collapse {
                        position: absolute;
                        top: 100%;
                        right: 0;
                        width: 220px;
                        background: white;
                        padding: 12px;
                        border-radius: 0 0 0 12px;
                        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
                        z-index: 1000;
                    }

                    .navbar-nav {
                        gap: 8px;
                    }

                    .nav-link {
                        padding: 10px;
                    }

                    .active-link::after {
                        display: none;
                    }

                    .active-link {
                        background-color: #f1f5ff;
                        border-radius: 8px;
                    }
                }
            `}</style>
        </nav>
    );
}

export default Navbar;