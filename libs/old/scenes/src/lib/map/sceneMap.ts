import { sceneManager } from '../manager';
import { GameScene, MainMenuScene } from '../definitions';

sceneManager.registerScene(MainMenuScene);
sceneManager.registerScene(GameScene);

export const sceneMap = {
  MainMenuScene,
  GameScene,
};
