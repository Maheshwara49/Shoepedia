import React from "react";
import { useParams } from "react-router-dom";
import products from "../constants/products";

const ProductAbout = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center text-red-500 mt-20">Product Not Found</h2>;
  }

  return (
    <div className="container mx-auto px-6 py-10">
      {/* Product Name */}
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

      {/* Single Product Image */}
      <div className="w-full h-80 bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden mb-8">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Description */}
      <p className="text-gray-600 text-lg mb-4">{product.description}</p>

      {/* Pricing */}
      <div className="flex items-center mb-6">
        <p className="text-black font-bold text-2xl mr-4">
          ₹{product.discountPrice}
        </p>
        <p className="text-gray-400 line-through text-lg">₹{product.price}</p>
      </div>

      {/* Actions */}
      <button className="bg-transperent text-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition">
        Buy Now
      </button>
      <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
        Add to cart
      </button>
    </div>
  );
};

export default ProductAbout;
