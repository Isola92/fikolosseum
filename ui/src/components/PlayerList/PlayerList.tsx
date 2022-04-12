import { Player } from "../../definitions/Player";
import React from "react";
interface Props {
  players: Player[];
}

export const PlayerList = ({ players }: Props) => {
  return (
    <li className="player-list">
      {players.map((player) => (
        <ul>{player.name}</ul>
      ))}
    </li>
  );
};
