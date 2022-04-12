import React from "react";
import { render } from "react-dom";
import { PlayerList } from "./components/PlayerList/PlayerList";

const App = () => {
  return (
    <main>
      <h1>Fikolosseum</h1>
      <p>Multiplayer minigames for socialising and having fun :)</p>
      <PlayerList
        players={[
          { name: "olinad" },
          { name: "Olof" },
          { name: "linecc97" },
          { name: "Fatte90" },
          { name: "Luderyo" },
          { name: "Mario Hero" },
        ]}
      />
    </main>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  render(<App />, document.querySelector("#root"));
});
