import React from "react";
import { ShopData } from "../constants"; // Ensure this path is correct
import ShopCard from '../components/ShopCard';

const Shop = () => {
  return (
    <section id="shop" className="p-6">
      {/* Title Section */}
      <div className="title text-center">
        <h2 className="text-[1.7rem] md:text-[2.2rem] font-bold">Our Products</h2>
        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Aspernatur veniam necessitatibus, amet ut corrupti aperiam.
        </p>
      </div>

      {/* Product Grid */}
      <div className="container max-sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 sm:px-8 lg:px-12">
        {ShopData.map((shop, index) => (
          <ShopCard key={index} {...shop} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center mt-16">
        <div className="pagination">
          <ul className="flex gap-2">
            <li>
              <a
                href="#"
                className="px-4 py-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-100"
              >
                Prev
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-4 py-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-100"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-4 py-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-100"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-4 py-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-100"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-4 py-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-100"
              >
                Next
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Shop;
