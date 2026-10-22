import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiRequest } from "./api/apiClient";
import { useShop } from "./ShopContextApi.jsx";

const ProductsDetails = () => {
    
    const { addToCart } = useShop();
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [selectedSize, setSelectedSize] = useState(null);

    

    useEffect(() => {

        const fetchProduct = async () => {
            try {
                console.log("ID iz URL-a:", id);

                const data = await apiRequest("/products", {
                    method: "GET"
                });

                console.log("Svi proizvodi:", data);

                const foundProduct = data.find(
                    (p) => String(p.id) === String(id)
                );

                console.log("Pronađen proizvod:", foundProduct);

                if (!foundProduct) {
                    setError("Proizvod nije pronađen.");
                    return;
                }

                setProduct(foundProduct);

            } catch (error) {
                console.error("Greška:", error);
                setError("Greška pri učitavanju proizvoda.");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();

    }, [id]);


    if (loading) {
        return <p>Loading product...</p>;
    }

    if (error) {
        return <p className="text-danger">{error}</p>;
    }

    if (!product) {
        return <p>Product not found.</p>;
    }


    


    return (
        <div className="container-fluid row justify-content-center flex-wrap">
            <div
                className="container offset-2 offset-lg-1 col-lg-1 col-md-12 col-4 product d-flex d-lg-grid order-3 order-lg-1 mb-md-5  ">

                <div className="container  poduct-box  ">
                    <img className="img-fluid rounded-4 "
                        src={`/${product.id}.png`}
                        alt={product.title}/>

                </div>
                <div className="container  poduct-box ">
                    <img className="img-fluid rounded-4 "
                        src={`/${product.id}.png`}
                        alt={product.title}/>

                </div>
                <div className="container  poduct-box ">
                    <img className="img-fluid rounded-4 "
                        src={`/${product.id}.png`}
                        alt={product.title}/>

                </div>
                <div className="container  poduct-box ">
                    <img className="img-fluid rounded-4 "
                        src={`/${product.id}.png`}
                        alt={product.title}/>

                </div>
            </div>
            <div className="container  col-lg-4 col-md-12   order-2 order-md-1 proudct-video  m-lg-0 ">
                
                <img className="rounded-4 img-fluid offset-md-2 offset-1  offset-lg-0"
                        src={`/${product.id}.png`}
                        alt={product.title}/>
            </div>
            <div className="container  col-lg-4 col-md-12  order-3  offset-1  ">

                <div className=" container info w-100  ">
                    <div className="  tittle fs-1">
                        <h2>
                           {product.title}
                        </h2>
                    </div>
                    <span className=" product-info fst-italic text-muted">
                        {product.category}
                    </span>
                    <span className =" d-block price-tag">
                        Price:
                    </span>
                    <div className="discount w-25 fs-5 container bg-danger text-center text-light">-40%</div>
                    <span className="price fs-1">{product.price}</span>
                    <small className="price-strike text-decoration-line-through text-muted ">25,441.75</small>
                    <span className="rate d-block mt-4 fs-5">Rate : ★★★★(5)</span>
                    <div className="best mt-4 fs-5">
                        <span className="tick best text-success ">✔</span>
                        <span>BESTSELLER</span>
                    </div>
                    <div className="details mt-4 fs-6">{product.description}</div>
                    <div className="container available fs-5">
                        <span>Available</span>
                        <span className="dot text-success fs-2">•</span>
                    </div>
                    <span className="guide  d-block me-5"><a href="https://www.nike.com/gb/size-fit/womens-footwear"
                        className="text-decoration-none text-dark float-end">Size
                        Guide</a></span>
                    <span className="fs-4 ">
                        Select Size
                    </span>

                    <div className="container  size-box d-flex flex-wrap  ">

                        {["S", "M", "L", "XL"].map((size) => (
                            <button
                                key={size}
                                type="button"
                                className={`container number p-2 m-2 text-center rounded-4 ${selectedSize === size ? 'btn text-light' : 'bg-light text-dark border border-dark'}`}
                                onClick={() => setSelectedSize(size)}
                            >
                                {size}
                            </button>
                        ))}

                    </div>
                    <button className="btn btn-primary w-100 cart mt-5 text-light text-center p-2 rounded-5" id="addToCart" onClick={() => addToCart(product,selectedSize)}>
                        ADD TO CART
                    </button>

                </div>
            </div>
        </div>
    );
}

export default ProductsDetails;