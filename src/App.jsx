import axios from "axios";
import React, { useState } from "react";
import useFetch from "./hooks/useFetch";

const App = () => {
  const [show, setShow] = useState(true);

  const hideWord = () => {
    setShow(false);
  };
  const showWord = () => {
    setShow(true);
  };
  const toggleWord = () => {
    setShow(!show);
  };
  return (
    <>
      <div>{show && "Code Academy"}</div>

      <button onClick={hideWord}>Hide</button>
      <button onClick={showWord}>Show</button>
      <button onClick={toggleWord}>Toggle</button>
    </>
  );
};

export default App;
