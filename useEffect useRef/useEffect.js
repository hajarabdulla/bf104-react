import { useEffect, useState } from "react";
import Home from "./Home";

function App() {
  const [counter, setCounter] = useState(0);
  const [num, setNum] = useState(0);

  const [show, setShow] = useState(true);

  const increaseCount = () => {
    setCounter(counter + 1);
  };

  const increaseNum = () => {
    setNum(num + 1);
  };

  console.log("Page rendered");

  useEffect(() => {
    console.log("I rendered only once");
  }, []);

  useEffect(() => {
    console.log("I render when num changes");
  }, [num]);

  const showHome = () => {
    setShow(!show);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increaseCount}>Increase</button>

      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase Num</button>
      <button onClick={showHome}>Hide Home page</button>

      {show ? <Home /> : ""}
    </div>
  );
}

export default App;
