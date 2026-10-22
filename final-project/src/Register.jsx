import React from "react";
import { apiRequest } from "./api/apiClient";
import { useState } from "react";

const Register = () => {

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        dateOfBirth: "",
        termsAccepted: false,

    });

    const [message, setMessage] = useState("");

    const handleInputChange = (event) => {

        const { name, value, type, checked } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }));
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log("Register radi"

        );
        console.log("Form Data:", formData);

        if (!formData.username || !formData.password || !formData.dateOfBirth || !formData.termsAccepted) {
            setMessage("Please fill in all required fields and accept the terms.");
            return;
        }
        if (formData.password.length < 6) {
            setMessage("Password must be at least 6 characters long.");
            return;
        }
        if (!formData.termsAccepted) {
            setMessage("You must accept the terms and conditions.");
            return;
        }


        try {
            const data = await apiRequest("/users", {
                method: "POST",
                body: {
                    username: formData.username,
                    email: formData.username,
                    password: formData.password,
                    dateOfBirth: formData.dateOfBirth,
                    termsAccepted: formData.termsAccepted
                }
            });

            setMessage("Registration successful! You can now log in.");

            setFormData({
                username: "",
                password: "",
                dateOfBirth: "",
                termsAccepted: false
            });
        } catch (error) {
            console.error("Greška prilikom registracije:", error);
        }
    };




    return (
        <div>
            <div className="fluid-container d-none d-lg-flex d-md-flex- d-sm-flex  ">
                <div className="container p-2 w-100 bg-image  shoes ">

                </div>
                <div className="container p-2 w-100 gradient ">

                </div>

            </div>
            <div className="box"  >

                <div className="container form mt-5 w-sm-100 w-md-50 ">
                    <p className="text-center login text-primary fs-1  ">REGISTER</p>
                    <form id="form" onSubmit={handleSubmit}>

                        <div className=" mt-1 mb-1 form1 form-floating ">

                            <input type="text" className="form-control focus-ring focus-ring-light rounded-4" id="username"
                                name="username" value={formData.email} onChange={handleInputChange} placeholder="Email" autoComplete="off" />
                            <label htmlFor="email" id="labelUsername">Email</label>
                            

                        </div>

                        <div className=" mt-3 mb-3 form1 form-floating ">

                            <input type="text" className="form-control focus-ring focus-ring-light rounded-4" id="username"
                                name="username" value={formData.username} onChange={handleInputChange} placeholder="Username" autoComplete="off" />
                            <label htmlFor="username" id="labelUsername">Username</label>
                            

                        </div>
                        <div className="mb-4 form1  form-floating">

                            <input type="password" className="form-control focus-ring focus-ring-light rounded-4"
                                id="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Password" autoComplete="current-password" />
                            <label htmlFor="password" id="labelPassword">Create a Password</label>

                        </div>
                        <div className="mb-4 form1  form-floating">

                            <input type="date" className="form-control focus-ring focus-ring-light rounded-4"
                                id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} placeholder="Date of Birth" autoComplete="current-password" />
                            <label htmlFor="dateOfBirth" id="labelDateOfBirth">Date of Birth</label>

                        </div>
                        <div className="mb-3 form-check check">
                            <input type="checkbox" className="form-check-input focus-ring focus-ring-light " id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">I want to receive emails about special offers and updates</label>

                        </div>
                        <div className="mb-3 form-check check">
                            <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleInputChange} className="form-check-input focus-ring focus-ring-light " id="exampleCheck2" />
                            <label className="form-check-label" htmlFor="exampleCheck2">I agree to the Terms and Conditions</label>

                        </div>


                        <button type="submit" id="registerBtn"
                            className="btn btn-primary btn-login w-100 fs-3 mt-3 rounded-4 p-2">Register</button>

                        <p id="login-status"></p>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default Register;