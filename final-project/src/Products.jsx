import React from "react";
import { useState, useEffect } from "react";
import { apiRequest } from "./api/apiClient";
import { Link } from "react-router-dom";
import { useShop } from "./ShopContextApi.jsx";
import { useSearchParams } from "react-router-dom";






const ShopProduct = ({ product, addToCart }) => {






    return (
        <div className="card prod shadow p-3 m-3 bg-body-tertiary rounded border-0">
            <Link to={`/products/${product.id}`} className="text-decoration-none">
                <img src={`/images/${product.id}.png`} className="card-img-top rounded" alt={product.title} />
            </Link>
            <div className="card-body">
                <h5 className="card-title fs-6 h-25">{product.title}</h5>
                <p className="card-text " >$ {product.price.toFixed(2)}</p>
                <button className="btn btn-primary w-100 " onClick={() => addToCart(product, "M")} >Add to cart</button>
            </div>
        </div>
    );
}



const Filter = () => {
    return (
        <div className="container  col-lg-1 d-none d-lg-block filters w-25 m-5 shadow p-3 mb-5 bg-body-tertiary rounded ">
            <h3 className="my-5">Filters</h3>
            <div className="accordion  " id="accordionPanelsStayOpenExample">
                <div className="accordion-item border-0 ">
                    <h2 className="accordion-header">
                        <button className="accordion-button btn" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseOne">
                            Price
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                        <div className="accordion-body">
                            <label htmlFor="range4" className="form-label">Example range</label>
                            <input type="range" className="form-range" min="37.99" max="249.99" defaultValue="50" id="range4" />
                            <output htmlFor="range4" id="rangeValue" aria-hidden="true"></output>
                        </div>
                    </div>
                </div>

                <div className="accordion-item border-0">
                    <h2 className="accordion-header">
                        <button className="accordion-button btn" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseTwo">
                            Gender
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show">
                        <div className="accordion-body">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="checkDefault" />
                                <label className="form-check-label" htmlFor="checkDefault">
                                    Woman
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="checkChecked" />
                                <label className="form-check-label" htmlFor="checkChecked">
                                    Man
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="checkDefault2" />
                                <label className="form-check-label" htmlFor="checkDefault2">
                                    Unisex
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="checkDefault3" />
                                <label className="form-check-label" htmlFor="checkDefault3">
                                    Kids
                                </label>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="accordion-item border-0 ">
                    <h2 className="accordion-header ">
                        <button className="accordion-button btn" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseThree">
                            Categories
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse show">
                        <div className="accordion-body">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="All" />
                                <label className="form-check-label" htmlFor="All">
                                    All
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="Urban" />
                                <label className="form-check-label" htmlFor="Urban">
                                    Urban
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="Blazer" />
                                <label className="form-check-label" htmlFor="Blazer">
                                    Blazer
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="Tops" />
                                <label className="form-check-label" htmlFor="Tops">
                                    Tops
                                </label>
                            </div>



                        </div>
                    </div>
                </div>


                <div className="accordion-item border-0">
                    <h2 className="accordion-header">
                        <button className="accordion-button btn" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseFour">
                            Collection
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse show">
                        <div className="accordion-body">

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="Spring" />
                                <label className="form-check-label" htmlFor="Spring">
                                    Spring & Summer
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="Autumn" />
                                <label className="form-check-label" htmlFor="Autumn">
                                    Autumn & Winter
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion-item border-0">
                    <h2 className="accordion-header">
                        <button className="accordion-button btn" type="button" data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseFive">
                            Colors
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse show">
                        <div className="accordion-body">

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="Blue" />
                                <label className="form-check-label" htmlFor="Blue">
                                    Blue
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="Red" />
                                <label className="form-check-label" htmlFor="Red">
                                    Red
                                </label>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <button type="button" className="btn btn-primary w-75 m-5">
                Apply Filters
            </button>
        </div>
    );
}

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [searchParams] = useSearchParams();
    const { addToCart } = useShop();


    const category = searchParams.get("category");


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await apiRequest("/products", {
                    method: "GET"
                });

                console.log("PRODUCTS:", data);

                setProducts(data);
            } catch (error) {
                console.error(error);
                setError("Greška pri učitavanju proizvoda.");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <p className="text-center">Loading products...</p>;
    }

    if (error) {
        return <p className="text-center text-danger">{error}</p>;
    }



    const categoryMap = {
        women: "Women Clothing",
        men: "Men Clothing",
        kids: "Kids Clothing"
    };


    const filteredProducts = category
    ? products.filter(
        (product) =>
            product.category?.toLowerCase() ===
            categoryMap[category]?.toLowerCase()
      )
    : products;


    const ShowProducts = filteredProducts.slice(0, 8);

    return (
        <div className="container col-lg-7  articals" >

            <section
                className="flex-wrap d-flex"
                id="products"
            >
                {ShowProducts.map((product) => (
                    <ShopProduct
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    />
                ))}
            </section>

            <nav aria-label="Page navigation example">
                <ul className=" pagination justify-content-center m-5">
                    <li className="page-item ">
                        <a className="page-link text-dark" href="#">Previous</a>
                    </li>

                    <li className="page-item">
                        <a className="page-link active btn text-dark" href="#">1</a>
                    </li>

                    <li className="page-item">
                        <a className="page-link text-dark" href="#">2</a>
                    </li>

                    <li className="page-item">
                        <a className="page-link text-dark   " href="#">...</a>
                    </li>

                    <li className="page-item">
                        <a className="page-link text-dark" href="#">9</a>
                    </li>

                    <li className="page-item">
                        <a className="page-link text-dark" href="#">10</a>
                    </li>

                    <li className="page-item">
                        <a className="page-link text-dark" href="#">Next</a>
                    </li>
                </ul>
            </nav>

        </div>
    );
};

const Nwsletter = () => {
    return (
        <div className="container-fluid newsletter row p-3 bg-secondary mt-5">
            <div className="offers col-12 col-gl-5 col-md-5">
                <h1 className="text-center m-5 text-left fs-1">STAY UP TO DATE ABOUT OUR BEST OFFERS!</h1>
            </div>
            <div className="input-email col-12 p-2 col-lg-6 col-md-6">

                <input type="text" className="text-center rounded-4 mt-5 w-100 p-3" id="email" name="email"
                    placeholder="Enter your email address..." autoComplete="off" />

                <div id="email-button" className="btn btn-dark rounded-4 w-100 p-4 mt-3">Subscribe
                </div>

            </div>
        </div>
    );
}



const Products = () => {
    return (
        <div className="fluid-container row">
            <h1 className="text-center m-5">View All Products</h1>
            <Filter />
            <Shop />
            <Nwsletter />

        </div>
    );
}

export default Products;