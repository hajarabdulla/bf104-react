import React from "react";
import ModeSwitcher from "./ModeSwitcher";

const Footer = ({setTheme, theme}) => {
  return (
    <div>
      Footer
      <ModeSwitcher setTheme={setTheme} theme={theme} />
    </div>
  );
};

export default Footer;
