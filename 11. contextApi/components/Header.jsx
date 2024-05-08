import React, { useContext } from "react";
import { MainProvider } from "../context/ThemeChange";

const Header = () => {
  const { theme } = useContext(MainProvider);

  return (
    <div>
      Header
      <span> {theme}</span>
    </div>
  );
};

export default Header;
