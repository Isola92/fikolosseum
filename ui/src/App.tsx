import React from "react";
import { createRoot } from "react-dom/client";
import { GameArea } from "./components/GameArea/GameArea";
import { PlayerList } from "./components/PlayerList/PlayerList";
import "./App.css";

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
      <GameArea />
    </main>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const root = createRoot(document.querySelector("#root"));
  root.render(<App />);
});
