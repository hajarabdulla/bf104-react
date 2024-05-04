import React, { useEffect, useState } from "react";

import axios from "axios";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { productSchema } from "./schema/productSchema";

const ProductForm = () => {
  const [suppliers, setSuppliers] = useState([]);

  const getSuppliers = async () => {
    const res = await axios("https://northwind.vercel.app/api/suppliers");
    setSuppliers(res?.data);
  };

  useEffect(() => {
    getSuppliers();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
  });

  const postData = (values) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(postData)}>
      <TextField
        id="outlined-basic"
        {...register("name")}
        label="Name"
        variant="outlined"
      />
      {errors?.name && <p style={{ color: "red" }}>{errors?.name?.message}</p>}

      <TextField
        id="outlined-basic"
        label="Quantity per unit"
        {...register("quantityPerUnit")}
        variant="outlined"
      />
      {errors?.quantityPerUnit && (
        <p style={{ color: "red" }}>{errors?.quantityPerUnit?.message}</p>
      )}

      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Age"
        {...register("supplierId")}
      >
        {suppliers?.map((s) => (
          <MenuItem key={s.id} value={s?.id}>
            {s?.contactTitle}
          </MenuItem>
        ))}
      </Select>
      {errors.supplierId && (
        <p style={{ color: "red" }}>{errors?.supplierId?.message}</p>
      )}

      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default ProductForm;
