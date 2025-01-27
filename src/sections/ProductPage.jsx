import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../constants/products";

const ProductPage = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      
      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
