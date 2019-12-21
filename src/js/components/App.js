// src/js/components/App.js

import React from "react";
import List from "./List";
import Form from "./Form";
import Post from "./Posts";

const App = () => (
  <>
    <div className="container center">
      <h2 className="blue-text">Articles</h2>
      <List />
    </div>
    <div className="container center">
      <h5 className="blue-text">Add a new article</h5>
      <Form />
    </div>
    <div className="container center">
      <h5 className="blue-text">API posts</h5>
      <Post />
    </div>
  </>
);

export default App;
