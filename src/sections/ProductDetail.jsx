import React from "react";
import { useParams } from "react-router-dom";
import products from "../constants/products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-6">
        <img
          src={require(`../assets/images/${product.image}`)}
          alt={product.name}
          className="w-full h-auto rounded-lg"
        />
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-500 mt-2">{product.description}</p>
          <div className="mt-4">
            <span className="text-green-500 text-2xl font-bold">
              ₹{product.discountPrice}
            </span>
            <span className="ml-4 line-through text-gray-400">
              ₹{product.price}
            </span>
          </div>
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg mt-6 shadow-lg hover:bg-yellow-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
