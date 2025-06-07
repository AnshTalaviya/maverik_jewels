import React from 'react';
import { Link } from 'react-router-dom';

const Jewellary_Card = ({ product }) => {
  const originalPrice = parseFloat(product.originalPrice); // if exists
  const discountPrice = parseFloat(product.price);
  const hasDiscount = originalPrice && originalPrice > discountPrice;

  return (
    <div className="group relative w-full sm:w-64 bg-[#f8f0e7] rounded-md shadow hover:shadow-lg transform hover:scale-105 transition-all duration-500 overflow-hidden">
      
      {/* Ribbon / Pin */}
      <div className="absolute top-0 left-0 bg-orange-300 text-white text-[10px] font-semibold px-2 py-1 rounded-br z-10">
        📌
      </div>

      {/* Discount Ribbon */}
      {product.discount && (
        <div className="absolute top-0 right-0 bg-black text-white text-[10px] font-semibold px-2 py-1 rounded-bl z-10">
          {product.discount}
        </div>
      )}

      {/* Image */}
      <div className="w-full h-64 overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.imageFront}
            alt={product.title}
            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
          />
        </Link>
      </div>

      {/* Product details */}
      <div className="text-center py-3 space-y-1">
        <p className="text-xs text-gray-500">{product.category}</p>
        <h2 className="text-md font-semibold text-gray-800">{product.title}</h2>
        <div className="text-sm">
          {hasDiscount ? (
            <div>
              <span className="line-through text-gray-400 mr-2">₹{originalPrice.toFixed(2)}</span>
              <span className="text-black font-bold">₹{discountPrice.toFixed(2)}</span>
            </div>
          ) : (
            <span className="text-black font-bold">₹{discountPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jewellary_Card;
