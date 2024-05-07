import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MainProvider = createContext(null);

const MainContext = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const [suppliers, setSuppliers] = useState([]);

  const getSuppliers = async () => {
    const res = await axios("http://northwind.vercel.app/api/suppliers");
    setSuppliers(res?.data);
  };

  useEffect(() => {
    getSuppliers();
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const values = {
    theme,
    setTheme,
    suppliers,
  };

  return (
    <MainProvider.Provider value={values}>{children}</MainProvider.Provider>
  );
};

export default MainContext;
