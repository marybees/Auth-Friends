import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    credentials: { username: "", password: "" },
  });

  handleChange = (e) => {
    useState({
      credentials: { ...credentials, [e.target.name]: e.target.value },
      error: "",
    });
  };

  login = (e) => {
    e.preventDefault();
    let history = useHistory();
    axiosWithAuth()
      .post("/api/login", credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        history.push("/protected");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Login</button>
      </form>
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
};

export default Login;
