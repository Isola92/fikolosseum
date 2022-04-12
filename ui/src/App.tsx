import React from "react";
import { render } from "react-dom";

const App = () => {
  return (
    <main>
      <h1>Hello World</h1>
    </main>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  render(<App />, document.querySelector("#root"));
});
