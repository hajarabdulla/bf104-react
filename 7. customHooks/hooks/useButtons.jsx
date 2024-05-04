import React, { useState } from "react";

const useButtons = () => {
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

  return [show, hideWord, showWord, toggleWord];
};

export default useButtons;
