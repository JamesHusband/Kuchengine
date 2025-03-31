import { createGame } from './createGame.js';
import { setGameInstance } from '../gameInstance/gameInstance.js';
import { exposeTestHook } from '../../debug/exposeTestHook.js';
import { createGameConfig } from '../../config/createGame.config.js';
import { initializeEventHandlers } from '../../events/handlers/index.js';
import Phaser from 'phaser';

jest.mock('../gameInstance/gameInstance.js', () => ({
  setGameInstance: jest.fn(),
}));

jest.mock('../../debug/exposeTestHook', () => ({
  exposeTestHook: jest.fn(),
}));

jest.mock('../../events/handlers', () => ({
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
    events: {
      once: jest.fn((event, callback) => {
        if (event === 'ready') callback();
      }),
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

    (createGameConfig as jest.Mock).mockReturnValue(mockConfig);
  });

  it('should create game instance with default config when no container provided', () => {
    createGame();
    expect(createGameConfig).toHaveBeenCalledWith(undefined);
    expect(Phaser.Game).toHaveBeenCalledWith(mockConfig);
  });

  it('should create game instance with provided container', () => {
    const container = 'game-container';
    createGame(container);
    expect(createGameConfig).toHaveBeenCalledWith(container);
    expect(Phaser.Game).toHaveBeenCalledWith(mockConfig);
  });

  it('should set game instance after creation', () => {
    createGame();
    const gameInstance = (Phaser.Game as jest.Mock).mock.results[0].value;
    expect(setGameInstance).toHaveBeenCalledWith(gameInstance);
  });

  it('should initialize event handlers after setting game instance', () => {
    createGame();
    const gameInstance = (Phaser.Game as jest.Mock).mock.results[0].value;
    expect(initializeEventHandlers).toHaveBeenCalledWith(gameInstance);
  });

  it('should expose test hook after initialization', () => {
    createGame();
    expect(exposeTestHook).toHaveBeenCalled();
  });

  it('should execute initialization steps in correct order', () => {
    createGame();

    const createConfigCall = (createGameConfig as jest.Mock).mock.invocationCallOrder[0];
    const phaserGameCall = (Phaser.Game as jest.Mock).mock.invocationCallOrder[0];
    const setInstanceCall = (setGameInstance as jest.Mock).mock.invocationCallOrder[0];
    const initHandlersCall = (initializeEventHandlers as jest.Mock).mock.invocationCallOrder[0];
    const exposeHookCall = (exposeTestHook as jest.Mock).mock.invocationCallOrder[0];

    expect(createConfigCall).toBeLessThan(phaserGameCall);
    expect(phaserGameCall).toBeLessThan(setInstanceCall);
    expect(setInstanceCall).toBeLessThan(initHandlersCall);
    expect(initHandlersCall).toBeLessThan(exposeHookCall);
  });
});
