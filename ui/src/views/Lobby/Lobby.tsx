import React from "react";
import { playerLogIn } from "../../actions/authentication";
import { Button } from "../../components/Button/Button";
import { TextField } from "../../components/TextField/TextField";

export const Lobby: React.FC = () => {
  const joinRoom = async () => {
    const loginResult = await playerLogIn({});
  };

  return (
    <>
      <h1>Hello World! It's fika time!</h1>
      <TextField name="Player name" />
      <Button onClick={joinRoom}>Join room</Button>
    </>
  );
};
