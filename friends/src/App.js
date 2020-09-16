import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import FriendsList from "./components/FriendsList";
import FriendsForm from "./components/FriendsForm";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">Add a Friend</Link>
          </li>
          <li>
            <Link to="/friend_form">My Friends</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/friends" component={FriendsList} />
          <Route path="/friend_form" component={FriendsForm} />
          <Route path="/login" component={LoginForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
