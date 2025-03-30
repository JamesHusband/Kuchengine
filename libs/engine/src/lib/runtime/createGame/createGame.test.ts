import { createGame } from './createGame.js';
import { setGameInstance } from '../gameInstance/gameInstance.js';
import { exposeTestHook } from '../../debug/exposeTestHook.js';
import { initializeEventHandlers } from '../../events/handlers/eventHandlers.js';
import { createGameConfig } from '../../config/createGame.config.js';
import Phaser from 'phaser';

jest.mock('../gameInstance/gameInstance', () => ({
  setGameInstance: jest.fn(),
}));

jest.mock('../../debug/exposeTestHook', () => ({
  exposeTestHook: jest.fn(),
}));

jest.mock('../../events/handlers/eventHandlers', () => ({
  initializeEventHandlers: jest.fn(),
}));

jest.mock('../../config/createGame.config', () => ({
  createGameConfig: jest.fn(),
}));

jest.mock('phaser', () => ({
  Game: jest.fn().mockImplementation(() => ({
    scene: {
      getScenes: jest.fn().mockReturnValue([]),
    },
  })),
  AUTO: 'AUTO',
  Scale: {
    RESIZE: 'RESIZE',
  },
}));

describe('createGame', () => {
  let mockConfig: Phaser.Types.Core.GameConfig;

  beforeEach(() => {
    jest.clearAllMocks();

    mockConfig = {
      type: Phaser.AUTO,
      scene: [],
      autoFocus: false,
      width: 800,
      height: 600,
      scale: {
        mode: Phaser.Scale.RESIZE,
        width: 800,
        height: 600,
      },
    };

    jest.mocked(createGameConfig).mockReturnValue(mockConfig);
  });

  it('should create a game instance with the correct config', () => {
    createGame();

    expect(createGameConfig).toHaveBeenCalledWith(undefined);
    expect(Phaser.Game).toHaveBeenCalledWith(mockConfig);
  });

  it('should set the game instance', () => {
    createGame();

    expect(setGameInstance).toHaveBeenCalledWith(
      expect.objectContaining({
        scene: expect.objectContaining({
          getScenes: expect.any(Function),
        }),
      }),
    );
  });

  it('should initialize event handlers', () => {
    createGame();

    expect(initializeEventHandlers).toHaveBeenCalledWith(
      expect.objectContaining({
        scene: expect.objectContaining({
          getScenes: expect.any(Function),
        }),
      }),
    );
  });

  it('should expose test hook', () => {
    createGame();

    expect(exposeTestHook).toHaveBeenCalled();
  });

  it('should call all functions in the correct order', () => {
    createGame();

    const createGameConfigCall = jest.mocked(createGameConfig).mock.invocationCallOrder[0];
    const phaserGameCall = jest.mocked(Phaser.Game).mock.invocationCallOrder[0];
    const setGameInstanceCall = jest.mocked(setGameInstance).mock.invocationCallOrder[0];
    const initializeEventHandlersCall = jest.mocked(initializeEventHandlers).mock.invocationCallOrder[0];
    const exposeTestHookCall = jest.mocked(exposeTestHook).mock.invocationCallOrder[0];

    expect(createGameConfigCall).toBeLessThan(phaserGameCall);
    expect(phaserGameCall).toBeLessThan(setGameInstanceCall);
    expect(setGameInstanceCall).toBeLessThan(initializeEventHandlersCall);
    expect(initializeEventHandlersCall).toBeLessThan(exposeTestHookCall);
  });
});
