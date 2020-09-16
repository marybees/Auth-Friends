import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendsForm = (props) => {
  const initialFriendValue = {
    name: "",
    age: "",
    email: "",
  };

  const [friend, setFriend] = useState(initialFriendValue);

  const history = useHistory();

  const handleChange = (e) => {
    setFriend({
      ...friend,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFriend({
      ...friend,
    });
  };

  axiosWithAuth()
    .post("./api/friends", friend)
    .then((res) => {
      localStorage.setItem("token", res.data.payload);
      history.push("/friends");
    })
    .catch((err) => console.log(err));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Name:{" "}
        <label>
          <input
            name="name"
            type="text"
            value={friend.name}
            onChange={handleChange}
          />
        </label>
        Age:{" "}
        <label>
          <input
            name="age"
            type="text"
            value={friend.age}
            onChange={handleChange}
          />
        </label>
        Email:{" "}
        <label>
          <input
            name="email"
            type="text"
            value={friend.email}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Friend</button>
      </form>
    </div>
  );
};

export default FriendsForm;
