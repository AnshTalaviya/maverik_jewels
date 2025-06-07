import React from 'react'
import { useState, useEffect } from 'react';
import Jewellary_Card from '../components/Jewellary_Card';

const Collection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/jewellers.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);



  return (
    <>

      <h1 className='text-4xl font-bold py-5 ms-16'>Collection</h1>

      <div className="flex flex-wrap justify-center gap-6 p-6">
        {products.map((product) => (
          <Jewellary_Card key={product.id} product={product} />
        ))}
      </div>

    </>


  );
}

export default Collection
