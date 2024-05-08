import React, { useContext } from "react";
import { MainProvider } from "./context/ThemeChange";

const Home = () => {
  const { suppliers } = useContext(MainProvider);

  console.log(suppliers);
  return (
    <div>
      {suppliers?.map((item) => (
        <h1>{item?.companyName}</h1>
      ))}
    </div>
  );
};

export default Home;
