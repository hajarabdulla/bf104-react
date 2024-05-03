import React, { useState } from "react";

const useCustomForm = (initialState) => {
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return [handleChange, handleSubmit];
};

export default useCustomForm;
