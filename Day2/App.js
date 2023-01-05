/**
 * Created a Server
 * HMR - Hot module replacement
 * File watcher algorithm - c++
 * Bundling
 * minify
 * Cleaning our code
 * Dev and production builds
 * Super fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatable with older version of browser
 * Port Number (It will manage port numbers)
 * Consistent hashing Algorithm
 * Parcel is Zero Config Bundle
 * 
 */

import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", { id: "h1" }, "Hello H1");
const heading2 = React.createElement("h2", { id: "h2" }, "Hello H2");
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
