import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialFriendValue = {
  name: "",
  age: "",
  email: "",
};

const FriendsForm = () => {
  const [friend, setFriend] = useState(initialFriendValue);

  let history = useHistory();

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
        <p>
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={friend.name}
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Age:
            <input
              type="text"
              name="age"
              placeholder="Age"
              value={friend.age}
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Email:
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={friend.email}
              onChange={handleChange}
            />
          </label>
        </p>
        <button type="submit">Add Friend</button>
      </form>
    </div>
  );
};

export default FriendsForm;
