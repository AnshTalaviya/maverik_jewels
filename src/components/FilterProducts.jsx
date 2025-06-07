import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Jewellary_Card from "./Jewellary_Card";

const FilterProducts = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  // Fetch products
  useEffect(() => {
    fetch("/jewellers.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);

        // Filter based on category from URL
        if (category) {
          const filteredItems = data.filter(
            (item) => item.category.toLowerCase() === category.toLowerCase()
          );
          setFiltered(filteredItems);
        } else {
          setFiltered(data); // show all if no category specified
        }
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, [category]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 capitalize">
        {category ? `${category} Collection` : "All Products"}
      </h2>



      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <Jewellary_Card key={product.id} product={product} />

          ))
        ) : (
          <p>No products found for "{category}"</p>
        )}
      </div>


    </div>
  );
};

export default FilterProducts;
