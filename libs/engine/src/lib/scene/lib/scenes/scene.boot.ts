import { createScene } from '../create-scene';

export const createBootScene = () =>
  createScene('Boot', (scene) => {
    scene.add.text(250, 450, 'Boot Scene', {
      font: '20px Arial',
      color: '#ffffff',
    });
  });
