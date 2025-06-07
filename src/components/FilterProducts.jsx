// components/FilterProducts.jsx
import React from 'react';

const FilterProducts = ({ products, category }) => {
  const filtered = category ? products.filter(p => p.category.toLowerCase() === category.toLowerCase()) : products;

  return (
    <div className="product-grid">
      {filtered.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h4>{product.name}</h4>
          <p>₹{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default FilterProducts;
