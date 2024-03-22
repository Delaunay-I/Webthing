"use client";

import { useEffect, useState } from "react";

const Ecom = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      {products &&
        products.map((product) => <p key={product._id}>{product.name}</p>)}
    </div>
  );
};

export default Ecom;
