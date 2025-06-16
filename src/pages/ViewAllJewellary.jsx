import React, { useState, useEffect } from 'react';
import Jewellary_Card from '../components/Jewellary_Card';

const ViewAllJewellary = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/jewellers.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold">All Jewellery Products</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-6 p-6">
        {products.map((product) => (
          <Jewellary_Card key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ViewAllJewellary;
