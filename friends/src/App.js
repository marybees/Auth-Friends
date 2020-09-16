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
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/friend_form">Add a Friend</Link>
        </div>
        <div>
          <Link to="/friends">My Friends</Link>
        </div>
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
