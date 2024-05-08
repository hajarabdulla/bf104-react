import React from "react";
import { Helmet } from "react-helmet";
import { FaTrash } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      Home
      <FaTrash />
    </div>
  );
};

export default Home;
