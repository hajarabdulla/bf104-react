import axios from "axios";
import React, { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Spinner from "./components/Spinner";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [nameValue, setNameValue] = useState("");
  const [supplierIdValue, setsupplierIdValue] = useState("");
  const [productId, setProductId] = useState("");

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://northwind.vercel.app/api/products");
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id) => {
    await axios.delete(`https://northwind.vercel.app/api/products/${id}`);

    getData();
  };

  const addProduct = async (e) => {
    e.preventDefault();

    await axios.post("https://northwind.vercel.app/api/products", {
      name: nameValue,
      supplierId: supplierIdValue,
    });
    getData();
  };

  const editData = (name, supplierdId, id) => {
    setNameValue(name);
    setsupplierIdValue(supplierdId);
    setProductId(id);
  };

  const handleUpdate = async () => {
    await axios.put(`https://northwind.vercel.app/api/products/${productId}`, {
      name: nameValue,
      supplierId: supplierIdValue,
    });
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <form action="" onSubmit={addProduct}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Supplier ID"
          variant="outlined"
          value={supplierIdValue}
          name={supplierIdValue}
          onChange={(e) => {
            setsupplierIdValue(e.target.value);
          }}
        />
        <Button variant="contained" type="submit">
          Add
        </Button>
      </form>

      <Button color="secondary" onClick={handleUpdate}>
        Update
      </Button>

      <TableContainer component={Paper}>
        {loading ? (
          <Spinner />
        ) : (
          <Table
            sx={{ minWidth: 650, maxWidth: 992 }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Company Name</TableCell>
                <TableCell>Country</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Delete</TableCell>
                <TableCell>Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products
                .sort((a, b) => a.id - b.id)
                .map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row?.id}
                    </TableCell>
                    <TableCell>{row?.name}</TableCell>
                    <TableCell>{row?.supplier?.companyName}</TableCell>
                    <TableCell>{row?.supplier?.address?.country}</TableCell>
                    <TableCell>{row?.supplier?.address?.city}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => deleteProduct(row.id)}
                      >
                        Delete
                      </Button>
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() =>
                          editData(row.name, row.supplierId, row.id)
                        }
                      >
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        )}
      </TableContainer>
    </div>
  );
};

export default App;
