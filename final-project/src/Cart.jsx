import React from "react";
import { useState, useEffect } from "react";
import { apiRequest } from "./api/apiClient";
import { useShop } from "./ShopContextApi.jsx";
import { Link } from "react-router-dom";

//pomocna komponenta koja prikazuje jedan proizvod u korpi

function CartItem({product}) {

    const { removeProduct, increaseQuantity, decreaseQuantity } = useShop();

  return (
    <div className="cart">
      <div className="cart-product">
        <div className="product-image">
          <img src={`/images/${product.id}.png`} alt={product.title} className="main-image" />
        </div>

        <div className="product-info">
          <div className="product-details">
            <h1 className="product-title">{product.title}</h1>


            <div className="quantity">
              <button className="quantity-btn" onClick={() => decreaseQuantity(product.id)}>-</button>
              <span>{product.quantity}</span>
              <button className="quantity-btn" onClick={() => increaseQuantity(product.id)}>+</button>
            </div>
            <div className="size">
              <p>Size: {product.size}</p>
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

const buttons = () => {
  return (
    <div className="cart-buttons d-flex justify-content-center ">
      
      <button className="btn  m-2 p-3"><Link to="/checkout" className="text-decoration-none text-white">
        Checkout
      </Link></button>
    </div>
  );
};

  



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
    <div >
        
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          {Items}
            {totalPrice}
            {buttons()}
        </>
      )}
        
    </div>
  );

  





}


export default Cart;