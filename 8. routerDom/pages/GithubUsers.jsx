import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GithubUsers = () => {
  const [users, setUsers] = useState([]);
  const [filterUser, setFilterser] = useState("");
  const navigate = useNavigate();

  const getUsers = async () => {
    const res = await axios("https://api.github.com/users");
    setUsers(res?.data);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <input
        type="text"
        value={filterUser}
        onChange={(e) => setFilterser(e.target.value)}
      />

      {users
        .filter((u) => u.login.toLowerCase().includes(filterUser.toLowerCase()))
        ?.map((u) => (
          <div>
            <h1>ID: {u?.id}</h1>
            <h3>Name: {u?.login}</h3>
            <button onClick={() => navigate(`/users/${u.login}`)}>
              Detail
            </button>
          </div>
        ))}
    </div>
  );
};

export default GithubUsers;
