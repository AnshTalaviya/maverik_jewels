import React from 'react'
import { useState, useEffect } from 'react';
import Jewellary_Card from '../components/Jewellary_Card';
import { useLocation } from 'react-router-dom';

const Collection = () => {
  const [products, setProducts] = useState([]);

  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const category = params.get("category");

  const filteredProducts = category
    ? products.filter((p) => p.category.toLowerCase() === category.toLowerCase())
    : products;

  useEffect(() => {
    fetch("/jewellers.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);



  return (
    <>

      <h1 className='text-4xl font-bold py-5 ms-16'>Collection</h1>

      <div className="flex flex-wrap justify-center gap-6 p-6">
        {filteredProducts.map((product) => (
          <Jewellary_Card key={product.id} product={product} />


        ))}
      </div>

    </>


  );
}

export default Collection
