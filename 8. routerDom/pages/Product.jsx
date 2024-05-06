import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item?.unitPrice}</p>
      <button onClick={() => navigate(`/products/${item.id}`)}>Detail</button>
    </div>
  );
};

export default Product;
