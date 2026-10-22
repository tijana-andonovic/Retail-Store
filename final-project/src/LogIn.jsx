import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { apiRequest } from "./api/apiClient";
import { useShop } from "./ShopContextApi.jsx";




const LogIn = () => {

    const { setUser } = useShop();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const data = await apiRequest("/auth/login", {
                method: "POST",
                body: {
                    username: formData.username,
                    password: formData.password
                }
            });

            console.log("Uspešan login:", data);
            const users = await apiRequest("/users", {
                method: "GET"
            });

            console.log("USERS:", users);

            const currentUser = users.find(
                (u) => u.username === formData.username
            );

            console.log("CURRENT USER:", currentUser);

            if (!currentUser) {
                throw new Error("Korisnik nije pronađen.");
            }




            const loggedInUser = {
                id: currentUser.id,
                username: formData.username,
                token: data.token,
                expiresIn: data.expiresIn
            };
            sessionStorage.setItem("user", JSON.stringify(loggedInUser));
            setUser(loggedInUser);

            if (data.token) {
                sessionStorage.setItem("token", data.token);
                window.location.href = "/"; 
            }

        } catch (error) {
            console.error("Greška prilikom prijave:", error);
        }
    };

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });


    const handleInputChange = (event) => {


        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    return (
        <div>
            <div className="fluid-container d-none d-lg-flex d-md-flex- d-sm-flex  ">
                <div className="container p-2 w-100 bg-image  shoes ">

                </div>
                <div className="container p-2 w-100 gradient ">

                </div>

            </div>
            <div className="box  ">

                <div className="container form mt-5 w-sm-100 w-md-50 ">
                    <p className="text-center login text-primary fs-1  ">LOGIN</p>
                    <form id="form" onSubmit={handleSubmit}>
                        <div className=" mt-5 mb-3 form1 form-floating ">

                            <input type="text" className="form-control focus-ring focus-ring-light rounded-4" id="username"
                                name="username" value={formData.username || ""} onChange={handleInputChange} placeholder="Username" autoComplete="off" />
                            <label htmlFor="username" id="labelUsername">Username</label>
                            <div className="form-text">We'll never share your username with anyone else.</div>

                        </div>
                        <div className="mb-4 form1  form-floating">

                            <input type="password" className="form-control focus-ring focus-ring-light rounded-4"
                                id="password" name="password" value={formData.password || ""} onChange={handleInputChange} placeholder="Password" autoComplete="current-password" />
                            <label htmlFor="password" id="labelPassword">Password</label>

                        </div>
                        <div className="mb-3 form-check check">
                            <input type="checkbox" className="form-check-input focus-ring focus-ring-light " id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                            <a href="#" className="float-end forgat">Forgat password?</a>
                        </div>

                        <button type="submit" id="loginBtn"
                            className="btn btn-primary btn-login w-100 fs-3 mt-3 rounded-4 p-2">Login</button>
                        <Link to="/register" className="text-reset create text-muted float-end"> Or Create New Account</Link>
                        <p id="login-status"></p>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default LogIn;