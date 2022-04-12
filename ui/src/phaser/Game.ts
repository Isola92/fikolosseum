import Phaser from "phaser";
import HelloWorldScene from "./HelloWorldScene";

export const initiateGame = (parent: HTMLElement) => {
  const gameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 200 },
      },
    },
    parent,
    scene: [HelloWorldScene],
  };

  return new Phaser.Game(gameConfig);
};
