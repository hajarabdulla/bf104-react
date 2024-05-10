import React, { useState } from "react";
import HeroImage from "./assets/images/hero.jpg.webp";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increaseByAmount,
  increment,
} from "./redux/features/counterSlice";
import { addTodo } from "./redux/features/todoSlice";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [titleValue, setTitleValue] = useState("");

  const count = useSelector((state) => state.counter.value);
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const addTask = (e) => {
    e.preventDefault();

    const obj = {
      id: uuidv4(),
      title: titleValue,
      isChecked: false,
    };

    dispatch(addTodo(obj));
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease </button>
      <button onClick={() => dispatch(increaseByAmount(5))}>
        Increase by 5{" "}
      </button>

      <form action="" onSubmit={addTask}>
        <input
          type="text"
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
        />
        <button>Submit</button>
      </form>

      <ul>
        {todos?.map((item) => (
          <li>
            <h1>{item?.id}</h1>
            <p>{item?.title}</p>
            <input type="checkbox" checked={item.isChecked} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
