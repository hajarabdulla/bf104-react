import React, { useContext } from "react";
import { MainProvider } from "../context/ThemeChange";

const ModeSwitcher = () => {
  const { theme, setTheme } = useContext(MainProvider);
  return (
    <div>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change Mode
      </button>
    </div>
  );
};

export default ModeSwitcher;
