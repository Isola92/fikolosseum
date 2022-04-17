import React from "react";
import { createRoot } from "react-dom/client";
import { GameArea } from "./components/GameArea/GameArea";
import { PlayerList } from "./components/PlayerList/PlayerList";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Lobby } from "./views/Lobby/Lobby";
import { Room } from "./views/Room/Room";
import { RoundResults } from "./views/RoundResults/RoundResults";

export const App = () => {
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
  root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/room" element={<Room />} />
        <Route path="/round-result" element={<RoundResults />} />
      </Routes>
    </BrowserRouter>
  );
});
