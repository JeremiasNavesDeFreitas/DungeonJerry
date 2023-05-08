import Phaser from 'phaser';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

function preload() {
  // carrega imagens, spritesheets, áudios, etc.
}

function create() {
  // adiciona uma nova cena para o menu
  this.scene.add('menu', MenuScene);

  // inicia a cena de menu
  this.scene.start('menu');
}

class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'menu' });
  }

  create() {
    // adiciona elementos de texto para o menu
    const titleText = this.add.text(400, 100, 'If - The Game', { fontSize: '64px', fill: '#FFF' });
    titleText.setOrigin(0.5);

    const startText = this.add.text(400, 400, 'Pressione qualquer tecla para começar', { fontSize: '32px', fill: '#FFF' });
    startText.setOrigin(0.5);

    // adiciona um evento de teclado para iniciar o jogo quando uma tecla for pressionada
    this.input.keyboard.on('keydown', () => {
      this.scene.start('jogo');
    });
  }
}