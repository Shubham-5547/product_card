import './App.css';

import React from "react";

const ProductCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-sm w-full bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
        {/* Product Image */}
        <img
          src="https://via.placeholder.com/300"
          alt="Product"
          className="w-full h-48 object-cover"
        />

        {/* Product Details */}
        <div className="p-4">
          {/* Product Title */}
          <h2 className="text-lg font-bold text-gray-800">Product Name</h2>

          {/* Product Description */}
          <p className="text-sm text-gray-600 mt-2">
            A short description of the product goes here. Highlight its main features.
          </p>

          {/* Buy Now Button */}
          <button className="mt-4 w-full bg-blue-600 text-white text-sm py-2 px-4 rounded hover:bg-blue-700 transition-colors">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
