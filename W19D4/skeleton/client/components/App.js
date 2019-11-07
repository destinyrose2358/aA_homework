import React from "react";
import { Route } from "react-router-dom";
import PostIndex from "./posts/PostIndex";
import Register from "./Register";
import CreatePost from "./posts/CreatePost";

const App = () => (
  <div>
    <Route path="/" component={Register} />
    <Route path="/post" component={CreatePost} />
    <Route exact path="/" component={PostIndex} />
  </div>
);

export default App;
