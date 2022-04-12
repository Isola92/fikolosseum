import { Player } from "../../definitions/Player";
import React from "react";
import "./PlayerList.css";
interface Props {
  players: Player[];
}

export const PlayerList = ({ players }: Props) => {
  return (
    <ul className="player-list">
      {players.map((player, i) => (
        <li key={i}>{player.name}</li>
      ))}
    </ul>
  );
};
