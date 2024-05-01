import React, { useRef } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Dropdown from "./components/Dropdown";
import TextField from "@mui/material/TextField";
import { Switch } from "antd";
import { Input } from 'antd';


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
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button>Butoon 1</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <Dropdown />
      <TextField
        id="outlined-multiline-flexible"
        label="Surname"
        multiline
        maxRows={4}
      />
      <Switch defaultChecked />
      <Input size="large" placeholder="Basic usage" />
    </div>
  );
};

export default App;
