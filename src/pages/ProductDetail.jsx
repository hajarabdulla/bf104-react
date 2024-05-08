import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const { productId } = useParams();

  const getProduct = async () => {
    const res = await axios(
      "http://northwind.vercel.app/api/products/" + productId
    );
    setProduct(res?.data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <h1>{product?.id}</h1>
      <h3>{product?.name}</h3>
      <p>{product?.unitPrice}</p>
    </div>
  );
};

export default ProductDetail;
