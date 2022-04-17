import React from "react";
import { Card } from "../../components/Card/Card";

export const RoundResults: React.FC = () => {
  let roundResults = null;
  roundResults = [
    { player: { playerName: "Danilo" }, place: 1, score: 27 },
    { player: { playerName: "Oskar" }, place: 2, score: 20 },
    { player: { playerName: "Fatlum" }, place: 3, score: 19 },
    { player: { playerName: "Caroline" }, place: 4, score: 12 },
    { player: { playerName: "Olof" }, place: 5, score: 11 },
    { player: { playerName: "Evan" }, place: 6, score: 10 },
  ];

  const getRowsWithRoundResults = () => {
    return roundResults?.map((roundResult, index) => {
      return (
        <tr key={index}>
          <td>{roundResult.place}</td>
          <td>{roundResult.player.playerName}</td>
          <td>{roundResult.score}</td>
        </tr>
      );
    });
  };

  return (
    <>
      <h1>Round 0001! You did great!</h1>

      <Card>
        <table>
          <thead>
            <tr>
              <th>Place</th>
              <th>Player</th>
              <th>Score</th>
            </tr>
          </thead>

          <tbody>{getRowsWithRoundResults()}</tbody>
        </table>
      </Card>
    </>
  );
};
