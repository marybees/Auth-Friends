import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendsList = (props) => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("./api/friends")
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>My Friends</h2>
      {friends.map((friend) => {
        return (
          <div>
            <p>friend.name</p>
            <p>friend.age</p>
            <p>friend.email</p>
          </div>
        );
      })}
    </div>
  );
};

export default FriendsList;
