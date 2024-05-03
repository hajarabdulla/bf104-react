import React from "react";

const Form = () => {
  const formValues = {
    quantityPerUnit: "",
    unitInStock: "",
  };

  const [handleChange, handleSubmit] = useCustomForm(formValues);
  
  return (
    <form>
      <input type="text" placeholder="quantityPerUnit" name="quantityPerUnit" />
      <input type="text" placeholder="unitInStock" name="unitInStock" />
      <button>SUbmit</button>
    </form>
  );
};

export default Form;
