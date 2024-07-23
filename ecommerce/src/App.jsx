import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Product from "./components/Product";
import Layout from "./components/Layout"; // Import your Layout component
import { useState } from "react";
import { CartContext } from "./context/CartContext";

function App() {
    const [cart,setCart]=useState([]);
    

    const addToCart = (product) => {
      setCart((prevCart) => {
        const existingProduct = prevCart.find(item => item.id === product.id);
        if (existingProduct) {
          return prevCart.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        return [...prevCart, { ...product, quantity: 1 }];
      });
    };
  
    const removeFromCart = (id) => {
      setCart((prevCart) => prevCart.filter(item => item.id !== id));
    };
  
    const updateQuantity = (id, quantity) => {
      setCart((prevCart) =>
        prevCart.map(item =>
          item.id === id
            ? { ...item, quantity }
            : item
        )
      );
    };
    return (
        <CartContext.Provider value={{cart,setCart,updateQuantity,removeFromCart,addToCart}}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="product/:id" element={<Product />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </CartContext.Provider>
    );
}

export default App;