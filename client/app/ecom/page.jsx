"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const Ecom = () => {
  const [products, setProducts] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    size: "",
  });

  const fetchProducts = () => {
    axios
      .get("http://localhost:8080/api/products")
      .then((response) => setProducts(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/api/products/${id}`)
      .then((res) => fetchProducts())
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/api/products", { ...newProduct })
      .then((res) => {
        console.log(res.data);
        fetchProducts();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="mt-3 flex flex-col gap-2">
        {products &&
          products.map((product) => (
            <div
              className="flex w-[400px] flex-row gap-5 rounded-lg bg-neutral-800 px-2 py-1"
              key={product._id + "1"}
            >
              <p
                key={product._id + "2"}
                className="basis-[300px]"
              >{`${product.name} with price of $${product.price}`}</p>
              <button
                key={product._id + "3"}
                className="rounded-md bg-red-600 px-2 py-1"
                onClick={() => handleDelete(product._id)}
              >
                delete
              </button>
            </div>
          ))}
      </div>
      <div>
        <form
          action=""
          method="post"
          className="my-4 flex w-[400px] flex-col gap-3 bg-purple-500 p-2"
          onSubmit={handleSubmit}
        >
          <div className="form-elements">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={newProduct.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-elements">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              required
              value={newProduct.price}
              onChange={handleChange}
            />
          </div>
          <div className="form-elements">
            <label htmlFor="size">Size</label>
            <input
              type="text"
              name="size"
              id="size"
              value={newProduct.size}
              onChange={handleChange}
            />
          </div>
          <input
            type="submit"
            className="basis-0 bg-yellow-500 px-2"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Ecom;
