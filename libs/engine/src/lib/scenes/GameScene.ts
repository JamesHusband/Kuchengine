import { createScene } from './lib/create-scene';

export const createGameScene = () =>
  createScene('Game', (scene) => {
    scene.add.rectangle(400, 300, 100, 100, 0xff0000);
    scene.add.text(250, 450, 'Game Scene (React-driven)', {
      font: '20px Arial',
      color: '#ffffff',
    });
  });
