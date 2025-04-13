import { createScene } from '../create-scene';

export const createGameScene = () =>
  createScene('Game', (scene) => {
    scene.add.rectangle(400, 300, 100, 100, 0xff0000);
  });
