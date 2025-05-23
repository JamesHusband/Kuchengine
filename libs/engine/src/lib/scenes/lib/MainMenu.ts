import { createScene } from './create-scene';

export const createMainMenuScene = () =>
  createScene('MainMenu', (scene) => {
    scene.add.text(100, 100, 'Main Menu (React-driven)', {
      font: '24px Arial',
      color: '#ffffff',
    });
  });
