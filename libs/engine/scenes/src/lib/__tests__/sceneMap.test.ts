jest.mock('../manager', () => ({
  sceneManager: {
    registerScene: jest.fn(),
  },
}));

jest.mock('../definitions', () => ({
  MainMenuScene: { key: 'MainMenuScene' },
  GameScene: { key: 'GameScene' },
}));

import { sceneManager } from '../manager';
import { MainMenuScene, GameScene } from '../definitions';
import { sceneMap } from '../map/sceneMap';

describe('sceneMap', () => {
  it('registers and exports scenes', () => {
    expect(sceneManager.registerScene).toHaveBeenCalledWith(MainMenuScene);
    expect(sceneManager.registerScene).toHaveBeenCalledWith(GameScene);
    expect(sceneMap.MainMenuScene).toBe(MainMenuScene);
    expect(sceneMap.GameScene).toBe(GameScene);
  });
});
