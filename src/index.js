import React from "react";
import ReactDOM from "react-dom";

import App from "../src/components/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div>
    <h1>The President</h1>
    <App />
  </div>,
  rootElement
);
