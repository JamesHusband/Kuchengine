import { createMainMenuScene } from './lib/MainMenu';
import { createGameScene } from './lib/GameScene';

export const registerScenes = () => {
  return [createMainMenuScene(), createGameScene()];
};
