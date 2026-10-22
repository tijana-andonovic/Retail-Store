import React from "react";
import { useShop } from "./ShopContextApi.jsx";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { apiRequest } from "./api/apiClient";

const PaymentForm = ({ onSubmit }) => {
    return (
        <div>


            <form className="needs-validation" onSubmit={onSubmit}>
                <div className="container w-75  ">
                    <p className=" h1 mb-5 ">Shipping Information</p>

                    <div className="container w-100 border border-primary rounded p-4 ">
                        <div className="row   g-3  ">
                            <div className="col-6 form-floating  mb-3 p-1 ">
                                <input type="text" className="form-control border-primary" id="floatingFirst"
                                    placeholder="First name" required />
                                <label htmlFor="floatingFirst m-2 " className="form-label">First Name</label>
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="col-6 form-floating p-1">
                                <input type="text" className="form-control border-primary" id="floatingLast"
                                    placeholder="Last name" required />
                                <label htmlFor="floatingLast m-2" className="form-label">Last Name</label>

                            </div>


                            <div className="col-12 form-floating mb-3 p-1">
                                <input type="text" className="form-control border-primary" id="floatingAddress"
                                    placeholder="Address" required />
                                <label htmlFor="floatingAddress m-2" className="form-label">Address</label>

                            </div>
                            <div className="col-12 form-floating mb-3 p-1">
                                <input type="text" className="form-control border-primary " id="floatingAddress2"
                                    placeholder="Apartment,suite etc." required />
                                <label htmlFor="floatingAddress2 m-2" className="form-label">Apartment,suite etc.</label>

                            </div>

                            <div className="col-4 p-1  ">
                                <select className="form-select sel border-primary"
                                    aria-label="Default select example">
                                    <option value="" disabled>Country</option>
                                    <option defaultValue="1">Serbia</option>
                                    <option defaultValue="2">Austria</option>
                                    <option defaultValue="3">Bulgaria</option>
                                </select>
                            </div>
                            <div className="col-4 p-1  ">
                                <select className="form-select sel border-primary"
                                    aria-label="Default select example">
                                    <option value="" disabled>City</option>
                                    <option defaultValue="1">Beograd</option>
                                    <option defaultValue="2">Nis</option>
                                    <option defaultValue="3">Pirot</option>
                                </select>
                            </div>
                            <div className="col-4 form-floating mb-3 p-1 ">

                                <input type="text" className="form-control border-primary" id="floatingZip"
                                    placeholder="Zip" required />
                                <label htmlFor="floatingZip m-2" className="form-label">Zip</label>
                                <div className="invalid-feedback">
                                    Please provide a valid zip.
                                </div>

                            </div>


                            <div className=" col-12 form-check form-switch mt-5">
                                <input className="form-check-input border-primary" type="checkbox" role="switch"
                                    id="switchCheckDefault" />
                                <label className="form-check-label" htmlFor="switchCheckDefault">Default switch checkbox
                                    input</label>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="container w-75 mt-5 ">
                    <p className="h1 mb-5">Payment Information</p>
                    <div className="container w-100 border border-primary rounded p-4 mt-5">
                        <div className="row">
                            <div className="col-6 p-1 mb-3 ">
                                <div type="button" className=" border border-primary rounded w-100 text-center"><img
                                    className="img-fluid rounded btn-pay"
                                    src="./paypal.png" alt="paypal" />
                                </div>
                            </div>
                            <div className="col-6 p-1 mb-3">
                                <div type="button" className="btn btn-outline-primary btn-lg w-100">Cash</div>
                            </div>

                            <div className="col-12 form-floating mb-3 p-1">
                                <input type="text" className="form-control border-primary" id="floatingHolder"
                                    placeholder="Cardholder Name" required />
                                <label htmlFor="floatingHolder m-2">Cardholder Name</label>
                            </div>
                            <div className="form-floating mb-3 p-1">
                                <input type="text" className="form-control border-primary " id="floatingNumber"
                                    placeholder="Card Number" required />
                                <label htmlFor="floatingNumber m-2">Card Number</label>
                            </div>


                            <div className="col-4 p-1 ">
                                <select className="form-select sel border-primary"
                                    aria-label="Default select example">
                                    <option value="" disabled>Month</option>
                                    <option defaultValue="January">January</option>
                                    <option defaultValue="February">February</option>
                                    <option defaultValue="March">March</option>
                                    <option defaultValue="April">April</option>
                                    <option defaultValue="May">May</option>
                                    <option defaultValue="June">June</option>
                                    <option defaultValue="July">July</option>
                                    <option defaultValue="August">August</option>
                                    <option defaultValue="September">September</option>
                                    <option defaultValue="October">October</option>
                                    <option defaultValue="November">November</option>
                                    <option defaultValue="December">December</option>
                                </select>
                            </div>
                            <div className="col-4 p-1 ">
                                <select className="form-select sel border-primary"
                                    aria-label="Default select example">
                                    <option value="" disabled>Year</option>
                                    <option defaultValue="2020">2020</option>
                                    <option defaultValue="2021">2021</option>
                                    <option defaultValue="2022">2022</option>
                                    <option defaultValue="2023">2023</option>
                                    <option defaultValue="2024">2024</option>
                                    <option defaultValue="2025">2025</option>
                                    <option defaultValue="2026">2026</option>
                                    <option defaultValue="2027">2027</option>
                                    <option defaultValue="2028">2028</option>
                                    <option defaultValue="2029">2029</option>
                                    <option defaultValue="2030">2030</option>
                                </select>
                            </div>
                            <div className="col-4 p-1 mb-5 ">
                                <select className="form-select sel border-primary"
                                    aria-label="Default select example">
                                    <option value="" disabled>CVC</option>
                                    <option defaultValue="1">One</option>
                                    <option defaultValue="2">Two</option>
                                    <option defaultValue="3">Three</option>
                                </select>
                            </div>



                            <button type="submit" className="btn btn-outline-primary btn-lg">Pay</button>

                        </div>
                    </div>
                </div>
            </form>
        </div>

    );
}


function CartItem({ product }) {

    const { removeProduct, increaseQuantity, decreaseQuantity } = useShop();

    return (
        <div className="cart">
            <div className="cart-product">
                <div className="product-image">
                    <img src={`/${product.id}.png`} alt={product.title} className="main-image" />
                </div>

                <div className="product-info">
                    <div className="product-details">
                        <h1 className="product-title">{product.title}</h1>


                        <div className="quantity">
                            <button className="quantity-btn" onClick={() => decreaseQuantity(product.id)}>-</button>
                            <span>{product.quantity}</span>
                            <button className="quantity-btn" onClick={() => increaseQuantity(product.id)}>+</button>
                        </div>
                    </div>

                    <div className="product-price">
                        <p className="price">${product.price}</p>
                        <button className="remove" onClick={() => removeProduct(product.id)}>
                            Remove
                        </button>
                    </div>





                </div>

            </div>


        </div>


    );
}







//komponenta korpe

function Cart() {



    const { cart, setCart, removeProduct, increaseQuantity, decreaseQuantity, totalPrice } = useShop();









    //mapiranje proizvoda u korpi na komponente CartItem
    const Items = cart.map(
        (p) => {
            return (
                <CartItem
                    key={p.id}
                    product={p}


                />
            )
        }
    )



    return (
        <div className="lg-5 col-md-12 col-sm-12 col-12  d-flex justify-content-center align-items-center flex-column">

            {cart.length === 0 ? (
                <p>Your cart is empty!</p>
            ) : (
                <>
                    {Items}
                    {totalPrice}

                </>
            )}

        </div>
    );







}


const Checkout = () => {
    const { cart, user , setCart} = useShop();

    const Payment = async (e) => {
        e.preventDefault();

        try {
            console.log("USER:", user);
            console.log("USER ID:", user?.id);
            console.log("CART:", cart);
            const data = await apiRequest("/carts", {
                method: "POST",
                body: {
                    userId: user?.id,
                    products: cart
                }
            });
           console.log("Kupovina uspešna:", data);
            setCart([]);
            
        } catch (error) {
            console.error(error);
            
        }
    };

    return (
        <div className="fluid-container"  >
            <h1 className="text-center display-1  mb-5 pb-3 col-12 lg-col-5"><strong>Checkout</strong> </h1>
            <div className="row ">
                <div className="col-lg-6 col-md-12 order-2 order-lg-1 ">
                    <PaymentForm onSubmit={Payment} />
                </div>

                <div className="col-lg-6 col-md-12 order-1 order-lg-2 ">
                    <div className="container w-75 "></div>

                    <Cart />
                </div>
            </div>

        </div>
    );
}

export default Checkout;