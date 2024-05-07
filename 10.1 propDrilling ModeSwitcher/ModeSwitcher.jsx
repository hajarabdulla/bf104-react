import React, { useEffect } from "react";

const ModeSwitcher = ({ setTheme, theme }) => {
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <button onClick={() => setTheme(theme == "light" ? "dark" : "light")}>
        Change Mode
      </button>
    </div>
  );
};

export default ModeSwitcher;
