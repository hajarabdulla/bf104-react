import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GithubUserDetail = () => {
  const params = useParams();

  const [user, setUser] = useState([]);

  const getUser = async () => {
    const res = await axios("https://api.github.com/users/" + params.username);
    setUser(res?.data);
  };

  useEffect(() => {
    getUser();
  }, []);

  console.log(params);
  return (
    <div>
      <img src={user.avatar_url} alt="" />
      <h1>{user?.id}</h1>
      <h3>{user?.name}</h3>
      <p>{user?.unitPrice}</p>
    </div>
  );
};

export default GithubUserDetail;
