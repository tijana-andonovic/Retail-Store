import { Link } from "react-router-dom";
import React from "react";



const Hero = ({ children }) => {

    return (
        <div className="hero lg-12 col-md-5 col-sm-2 col-12  ">
            <div className=" container-fluid row justify-content-center ">

            </div>
        </div>
    );

}

const Main = ({ children }) => {
    return (

        <div className="">
            <h1 className=" m-5 p-2">New Arrivals</h1>
            <div className="container-fluid row filters justify-content-center  ">
                <div className=" col-12 col-md-4 col-sm-12 col-lg-2 d-flex flex-column align-items-center justify-content-start">
                    <img src="/woman.png" className="imag" />
                    <button className="btn " id="btnWomen"><Link to="/products?category=women" className="text-decoration-none text-dark">Women</Link></button>

                </div>
                <div className=" col-12 col-md-4 col-sm-12 col-lg-2 d-flex flex-column align-items-center justify-content-start">
                    <img src="/kids.png" className="imag" />
                    <button className="btn " id="btnKids"><Link to="/products?category=kids" className="text-decoration-none text-dark">Kids</Link></button>

                </div>
                <div className=" col-12 col-md-4 col-sm-12 col-lg-2 d-flex flex-column align-items-center justify-content-start">
                    <img src="/man.png" className="imag" />
                    <button className="btn " id="btnMen"><Link to="/products?category=men" className="text-decoration-none text-dark">Men</Link></button>

                </div>

            </div>

        </div>
    );
};

const PromoBaner = ({ children }) => {
    return (
        <div className=" hero lg-12 col-md-5 col-sm-2 col-12 newsletter row text-center   mt-5 promo">
            <div className="  row align-items-end    ">
                <p className="container-fluid col-12 bg-secondary text-white banerText">Enjoy 20% Off This Season’s Styles<button className="col-3 btn btn-primary  text-white mx-5 p-2"><Link to="/products" className="text-white decoration-none">Show All</Link></button></p>

            </div>
        </div>
    );
};




function Home() {
    return (
        <div className="bg-secondary" >
            <Hero />
            <Main />
            <PromoBaner />


        </div>
    );
}

export default Home;