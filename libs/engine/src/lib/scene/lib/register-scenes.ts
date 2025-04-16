import { createMainMenuScene, createGameScene, createBootScene } from './scenes';

export const registerScenes = () => {
  return [createBootScene(), createMainMenuScene(), createGameScene()];
};
