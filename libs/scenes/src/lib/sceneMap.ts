import { sceneManager } from './sceneManager';
import { GameScene } from './scenes/GameScene';
import { MainMenuScene } from './scenes/MainMenuScene';

sceneManager.registerScene(MainMenuScene);
sceneManager.registerScene(GameScene);

export const sceneMap = {
  MainMenuScene,
  GameScene,
};
