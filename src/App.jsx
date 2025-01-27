import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Category from "./sections/Category";
import Shop from "./sections/Shop";
import Testimonial from "./sections/Testimonial";
import Blog from "./sections/Blog";
import Footer from "./sections/Footer";
import ProductPage from "./sections/ProductPage";
import ProductAbout from "./sections/ProductAbout";
import CartPage from "./sections/CartPage"; // Import the CartPage
import { CartProvider } from "./context/CartContext"; // Import CartProvider

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="relative">
          <Nav />
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Features />
                  <Category />
                  <Shop />
                  <Testimonial />
                  <Blog />
                  <Footer />
                </>
              }
            />
            {/* Product Page */}
            <Route path="/product" element={<ProductPage />} />
            {/* Product Detail Page */}
            <Route path="/product/:id" element={<ProductAbout />} />
            {/* Cart Page */}
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}
