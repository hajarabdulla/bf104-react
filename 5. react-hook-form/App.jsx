import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { productFormSchema } from "./schema/productFrom";
import ProductsForm from "./ProductsForm";

const App = () => {
  const [suppliers, setSuppliers] = useState([]);

  const getSuppliers = async () => {
    const res = await axios("http://northwind.vercel.app/api/suppliers");
    setSuppliers(res?.data);
  };

  useEffect(() => {
    getSuppliers();
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(productFormSchema),
  });

  const createProduct = async (values) => {
    await axios.post("https://northwind.vercel.app/api/products", values);
  };

  return (
    // <form onSubmit={handleSubmit(createProduct)}>
    //   <input type="text" {...register("name")} placeholder="name" />
    //   {errors.name?.message && (
    //     <p style={{ color: "red" }}>{errors.name?.message}</p>
    //   )}
    //   <br />
    //   <input
    //     type="text"
    //     {...register("quantityPerUnit")}
    //     placeholder="quantityPerUnit"
    //   />
    //   {errors.name?.message && (
    //     <p style={{ color: "red" }}>{errors.quantityPerUnit?.message}</p>
    //   )}
    //   <br />

    //   <input type="text" {...register("unitPrice")} placeholder="unitPrice" />
    //   {errors.name?.message && (
    //     <p style={{ color: "red" }}>{errors.unitPrice?.message}</p>
    //   )}
    //   <br />

    //   <input
    //     type="text"
    //     {...register("unitsOnOrder")}
    //     placeholder="unitsOnOrder"
    //   />
    //   {errors.name?.message && (
    //     <p style={{ color: "red" }}>{errors.unitsOnOrder?.message}</p>
    //   )}
    //   <br />

    //   <select name="" id="">
    //     {suppliers?.map((s) => (
    //       <option key={s.id} {...register("supplierId")} value={s.id}>
    //         {s?.contactTitle}
    //       </option>
    //     ))}
    //   </select>

    //   {errors.name?.message && (
    //     <p style={{ color: "red" }}>{errors.supplierId?.message}</p>
    //   )}
    //   <br />

    //   <button type="submit">Submit</button>
    // </form>

    <>
      <ProductsForm />
    </>
  );
};

export default App;
