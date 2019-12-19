// src/js/components/App.js

import React from "react";
import List from "./List";
import Form from "./Form";

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
  </>
);

export default App;
