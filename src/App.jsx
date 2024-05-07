import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div>
      <Header theme={theme} />
      <Footer setTheme={setTheme} theme={theme}  />
    </div>
  );
};

export default App;
