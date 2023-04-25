import Phaser from "phaser";

let gameScene = new Phaser.Scene('Game');

let config = {
  type: Phaser.AUTO,
  width:1280,
  height:720,
  scene: gameScene
};

let game = new Phaser.Game(config);