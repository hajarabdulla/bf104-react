import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios("http://northwind.vercel.app/api/products");
    setProducts(res?.data);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      {products
        ?.sort((a, b) => a.id - b.id)
        ?.map((item) => (
          <Product item={item} />
        ))}
    </div>
  );
};

export default Products;
