import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const credentials = {
  username: "",
  password: "",
};

// const history = useHistory();

const LoginForm = (props) => {
  const [login, setLogin] = useState(credentials);

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", login)
      .then((res) => {
        console.log(res.data.payload);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/friends");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <p>
          <label>
            Username:
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={login.username}
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Password:
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={login.password}
              onChange={handleChange}
            />
          </label>
        </p>
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
