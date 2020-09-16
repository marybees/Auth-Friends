import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const LoginForm = (props) => {
  const credentials = {
    username: "",
    password: "",
  };

  const history = useHistory();

  const [login, setLogin] = useState(credentials);

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/login", login)
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
      <form onSubmit={handleLogin}>
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
      {/* <p style={{ color: "red" }}>{err}</p> */}
    </div>
  );
};

export default LoginForm;
