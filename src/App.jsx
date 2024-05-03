import React from "react";
import useButtons from "./hooks/useButtons";

const App = () => {
  const [code, hideCode, showCode, toggleCode] = useButtons();
  const [tech, hideTech, showTech, toggleTech] = useButtons();

  return (
    <>
      <div>{code && "Code Academy"}</div>

      <button onClick={hideCode}>Hide</button>
      <button onClick={showCode}>Show</button>
      <button onClick={toggleCode}>Toggle</button>

      <div>{tech && "Tech Academy"}</div>

      <button onClick={hideTech}>Hide</button>
      <button onClick={showTech}>Show</button>
      <button onClick={toggleTech}>Toggle</button>
    </>
  );
};

export default App;
