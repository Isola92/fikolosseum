import React, { useEffect } from "react";
import { Card } from "../../components/Card/Card";
import { When } from "../../components/When/When";
import { Button } from "../../components/Button/Button";
import { getRoomStatus, setPlayerReadyForNextRound } from "../../actions/room";

const setReady = () => {
  setPlayerReadyForNextRound().then(console.info);
};

export const Room: React.FC = () => {
  useEffect(() => {
    getRoomStatus().then(console.info);
  }, []);

  let players = null;
  players = [
    // test with score
    { playerName: "Caroline", isReadyForNextRound: true },
    { playerName: "Danilo", isReadyForNextRound: false },
    { playerName: "Evan", isReadyForNextRound: false },
    { playerName: "Fatlum", isReadyForNextRound: true },
    { playerName: "Olof", isReadyForNextRound: false },
    { playerName: "Oskar", isReadyForNextRound: true },
  ];
  players = [
    // test with score
    { playerName: "Danilo", isReadyForNextRound: false, place: 1, score: 27 },
    { playerName: "Oskar", isReadyForNextRound: true, place: 2, score: 20 },
    { playerName: "Fatlum", isReadyForNextRound: true, place: 3, score: 19 },
    { playerName: "Caroline", isReadyForNextRound: true, place: 4, score: 12 },
    { playerName: "Olof", isReadyForNextRound: false, place: 5, score: 11 },
    { playerName: "Evan", isReadyForNextRound: false, place: 6, score: 10 },
  ];

  const hasResults = players?.length > 0 && players[0].place > 0;
  const playerIsReady = () => {
    return <span>I am ready!</span>;
  };
  const playerIsNotReady = () => {
    return <span>I am not ready yet!</span>;
  };
  const getTableRows = () => {
    return players?.map((player, index) => {
      return (
        <tr key={`player${index}`}>
          <When truthy={hasResults}>
            <td>{player.place}</td>
          </When>
          <td>{player.playerName}</td>
          <When truthy={hasResults}>
            <td>{player.score}</td>
          </When>
          <td>
            {player.isReadyForNextRound ? playerIsReady() : playerIsNotReady()}
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      <h1>Hello user! You are in the room 001!</h1>
      <Card>
        <table>
          <thead>
            <tr>
              <When truthy={hasResults}>
                <th>Place</th>
              </When>
              <th>Player</th>
              <When truthy={hasResults}>
                <th>Score</th>
              </When>
            </tr>
          </thead>
          <tbody>{getTableRows()}</tbody>
        </table>
      </Card>
      <Card>
        <Button onClick={setReady()}>I am ready!</Button>
      </Card>
    </>
  );
};
