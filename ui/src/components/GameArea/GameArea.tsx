import { initiateGame } from "../../phaser/Game";
import React, { useEffect, useRef } from "react";
export const GameArea = () => {
  const gameArea = useRef<HTMLElement>(null);
  const gameInstance = useRef(null);

  useEffect(() => {
    gameInstance.current = initiateGame(gameArea.current);
  }, []);

  return <section ref={gameArea}></section>;
};
