import React from "react";
import ReactDOM from "react-dom";
import { Heading } from "./Header";

const heading2 = React.createElement(
  "h1",
  { className: "container", key: "newKey" },
  "heading 2"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
