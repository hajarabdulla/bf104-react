import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const myInterval = setInterval(() => {
      console.log("Salam dunya");
    }, 1000);

    return () => {
      console.log("Bye bye home page");
      clearInterval(myInterval);
    };
  }, []);

  return <div>Home</div>;
};

export default Home;
