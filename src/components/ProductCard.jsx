import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // Use Cart Context

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="product-card bg-white rounded-lg shadow-md p-4 w-64 cursor-pointer transition-transform transform hover:scale-105">
        {/* Image Container */}
        <div className="w-full h-40 flex items-center justify-center bg-gray-100 rounded-md overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="object-contain h-full w-full transition-transform transform group-hover:scale-110"
          />
        </div>

        {/* Product Details */}
        <h2 className="font-semibold text-md mt-2">{product.name}</h2>
        <p className="text-gray-600 text-sm">{product.description}</p>

        {/* Pricing */}
        <div className="flex items-center justify-between mt-2">
          <p className="text-gray-500 font-bold text-sm">₹{product.discountPrice}</p>
          <p className="line-through text-gray-500 text-xs">₹{product.price}</p>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-4">
          <button
            className="bg-transperent text-black text-sm px-4 py-2 rounded-md hover:bg-black hover:text-white transition"
            onClick={(e) => {
              e.preventDefault(); // Prevent navigation
              addToCart(product); // Add to Cart
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
