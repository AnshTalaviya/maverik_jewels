import React from 'react'
import { useState,useEffect } from 'react';
import Jewellary_Card from '../components/Jewellary_Card';
import FilterProducts from '../components/FilterProducts';

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
                {/* Product list here */}
            </div>
            <div className="flex flex-wrap justify-center gap-6 p-6">
                {/* {products.map((product) => (
                    <Jewellary_Card key={product.id} product={product} />
                ))} */}

                <FilterProducts products={products} />

            </div>

        </>


    );
}

export default ViewAllJewellary
