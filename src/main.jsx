import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./components/Nav";
import Content from "./components/Content";
import Slider from "./components/Slider";
import "./app.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Nav />
    <Content />
    <Slider />
  </React.StrictMode>
);
