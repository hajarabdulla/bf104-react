import React from "react";

const customHook = () => {
  const signIn = {
    age: "",
    surname: "",
    password: "",
  };

  const [handleChange, handleSubmit] = useCustomForm(signIn);

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="age"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="surname"
          name="surname"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default customHook;
