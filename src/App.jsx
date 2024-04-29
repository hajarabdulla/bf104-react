import React, { useRef } from "react";

const App = () => {
  const counter = useRef(0);

  const increaseCount = () => {
    counter.current += 1;
    console.log(counter);
  };

  const h1Ref = useRef(null);

  const changeStyle = () => {
    h1Ref.current.style.background = "red";
    h1Ref.current.innerText = "Salam";
  };

  return (
    <div>
      App
      <h1 ref={h1Ref}>{counter.current}</h1>
      <button onClick={increaseCount}>Increase Button</button>
      <button onClick={changeStyle}>Change Style</button>
    </div>
  );
};

export default App;
