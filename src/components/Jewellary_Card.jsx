import React from 'react'
import './Collection.css'

const Jewellary_Card = ({ product }) => {
  return (
    <div className="group w-full relative sm:w-64 bg-white rounded-lg shadow-md overflow-hidden">


      <div
        key={product.id}
        className="group relative w-64 h-80 perspective">
        <div className="relative w-full h-full duration-700 transform-style preserve-3d transition-transform group-hover:rotate-y-180">
          {/* Front */}
          <div className="absolute w-full h-full backface-hidden">
            <img
              src={product.imageFront}
              alt="Front"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Back */}
          <div className="absolute w-full h-full rotate-y-180 backface-hidden">
            <img
              src={product.imageBack}
              alt="Back"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Optional: Discount Tag */}
      <div className="absolute top-2 right-2 bg-pink-100 text-xs px-2 py-1 rounded-full z-10">
        {product.discount}
      </div>


      <div className="p-4 space-y-1 text-center">
        <h2 className="text-sm font-medium">{product.title}</h2>
        <p className="text-xs text-gray-500">{product.brand}</p>
        <p className="text-sm font-semibold">From Rs. {product.price}</p>
      </div>
    </div>
  );
}

export default Jewellary_Card
