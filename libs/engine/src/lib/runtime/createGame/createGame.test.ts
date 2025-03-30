import { createGame } from './createGame.js';
import { setGameInstance } from '../gameInstance/index.js';
import Phaser from 'phaser';

jest.mock('../gameInstance', () => ({
  setGameInstance: jest.fn(),
}));

jest.mock('../../debug/exposeTestHook', () => ({
  exposeTestHook: jest.fn(),
}));

jest.mock('phaser', () => {
  return {
    __esModule: true,
    default: {
      Game: jest.fn().mockImplementation(() => ({
        mocked: true,
      })),
    },
  };
});

jest.mock('../../config/scene.config', () => ({
  sceneMap: {
    MockScene: {},
  },
}));

jest.mock('../../config/config', () => ({
  config: { width: 800, height: 600 },
}));

describe('createGame', () => {
  it('should create the game and call setGameInstance', () => {
    createGame('test');

    expect(Phaser.Game).toHaveBeenCalledWith(
      expect.objectContaining({
        width: 800,
        height: 600,
        parent: 'test',
        scene: [{}],
      }),
    );

    expect(setGameInstance).toHaveBeenCalledWith({ mocked: true });
  });

  it('should call exposeTestHook in test environment', () => {
    const { exposeTestHook } = require('../../debug/exposeTestHook');
    createGame('test');
    expect(exposeTestHook).toHaveBeenCalled();
  });
});
