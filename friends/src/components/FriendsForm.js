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
    console.log("friend submitted");

    axiosWithAuth()
      .post("./api/friends", friend)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        history.push("/friends");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>My Friends</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={friend.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Age:
          <input
            type="text"
            name="age"
            value={friend.age}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
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
