import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const Cart = localStorage.getItem("cart");
        return Cart ? JSON.parse(Cart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const [user, setUser] = useState(() => {
        const savedUser = sessionStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const addToCart = (product,size) => {
        setCart((Cart) => {

            const Product = Cart.find((p) => p.id === product.id

            );

            let newCart;

            if (Product) {
                newCart = Cart.map((p) =>
                    p.id === product.id ? {
                        ...p,
                        quantity: p.quantity + 1
                    }
                        : p
                );
            } else {
                newCart = [
                    ...Cart,
                    {
                        ...product,
                        quantity: 1,
                        size: size
                    }
                ];
            }

            
            console.log("CART:", newCart);

            return newCart;
        });
    };
    //funkcija za uklanjanje proizvoda 
    const removeProduct = (id) => {
        setCart(cart.filter(p => p.id !== id));
    };

    //funkcije za povecavanje i smanjenje kolicine 
    const increaseQuantity = (id) => {
        setCart(cart.map(p => p.id === id ? { ...p, quantity: p.quantity + 1 } : p));
    };

    const decreaseQuantity = (id) => {
        setCart(cart.map(p => p.id === id ? { ...p, quantity: Math.max(1, p.quantity - 1) } : p));
    };

    //racunanje ukupne cene svih proizvoda u korpi
    const totalPrice = <div className="total-price">
        <h2 className="total">${cart.reduce((total, p) => total + p.price * p.quantity, 0).toFixed(2)}</h2>

    </div>

    const cartCount = cart.reduce(
        (total, product) => total + product.quantity,
        0
    );

    return (
        <ShopContext.Provider value={{ cart, setCart, user, setUser, addToCart, removeProduct, increaseQuantity, decreaseQuantity, totalPrice, cartCount }}>
            {children}
        </ShopContext.Provider>
    );
};

export const useShop = () => {
    return useContext(ShopContext);
};


