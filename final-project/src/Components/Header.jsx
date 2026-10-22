import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useEffect ,useState } from "react";
import { useShop } from "../ShopContextApi.jsx";




const Header = () => {

    const { user } = useShop();
    const { cartCount } = useShop();


    const navClass = ({ isActive }) =>
        `nav-link${isActive ? " active" : ""}`;



    return (
        <header>
            <div
                className="container-fluid row justify-content-center header  navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-expand  p-3   rounded sticky-top z-1">
                <div
                    className="navbar-brand col-lg-1 col-md-5 col-5 justify-content-md-end order-lg-1  order-3 d-flex justify-content-center  ">
                    <img src="./images/logo2.ico" alt="Logo" className="d-inline-block logo" />
                </div>

                <div className="container  col-lg-5 flex-shrink-2  rounded-5 order-2  search d-none d-lg-flex  ">
                    <form className=" d-lg-flex order-lg-2 order-md-2 " role="search">
                        <input className="form-control   focus-ring focus-ring-light  d-lg-flex d-none input-search "
                            type="search" placeholder="Search" aria-label="Search" id="search" autoComplete="off" />
                        <button className="btn btn-primary   btn-sm  rounded-circle " type="submit"><span
                            className="material-symbols-outlined">
                            search
                        </span></button>
                    </form>
                </div>
                <div className="container col-lg-4 col-md-6 col-sm-4 col-5 order-4 justify-content-center  align-self-center ">
                    <ul className="nav d-lg-flex  ">
                        <li className="nav-item  ">
                            <div className="material-symbols-outlined log ">
                                <a href="#" className="fs-3 text-decoration-none text-dark m-lg-3 m-md-3 log">favorite</a>
                            </div>
                        </li>
                        <li className="nav-item ">
                            <div className="material-symbols-outlined log">
                                <NavLink to="/cart" className="fs-3 text-decoration-none text-dark m-lg-3 m-md-3 log">shopping_cart{cartCount}</NavLink>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="material-symbols-outlined ">

                                <NavLink to="/login" className=" fs-3 text-decoration-none  m-lg-3  log">account_circle</NavLink>
                            </div>
                        </li>
                        <li className="nav-item">
                            {user && (
                                <p className="mb-0 ms-2">
                                    {user.username}
                                </p>
                            )}
                        </li>
                    </ul>
                </div>
                <div className="container col-1 log">

                    <a className=" material-symbols-outlined text-decoration-none text-dark d-lg-none d-md-none d-sm-flex order-sm-1 "
                        data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                        menu
                    </a>

                </div>

                <div className="container col-1 log ">
                    <a href="#"
                        className="material-symbols-outlined text-decoration-none text-dark d-lg-none  d-flex log  order-sm-2">
                        search
                    </a>

                </div>
            </div>
            <nav className="navbar ">
                <div className=" navigation container-fluid d-lg-flex d-md-flex d-sm-flex d-none justify-content-center  ">
                    <div className="navig  ">
                        <NavLink to="/products" className="box2 ">PRODUCTS</NavLink>
                    </div>
                    <div className="navig ">
                        <a href="#" className="box2">SALE!</a>
                    </div>
                    <div className="navig ">
                        <NavLink to="/" className="box2">HOME</NavLink>
                    </div>
                    <div className="navig ">
                        <NavLink to="/about" className="box2">ABOUT US</NavLink>
                    </div>
                    <div className="navig ">
                        <NavLink to="/checkout" className="box2">CHECKOUT</NavLink>
                    </div>

                </div>
            </nav>
        </header>
    );
}

export default Header;