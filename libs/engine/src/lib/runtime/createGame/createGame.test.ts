import { createGame } from './createGame.js';
import { setGameInstance } from '../gameInstance/index.js';
import { gameEvents } from '../../eventBus/index.js';

jest.mock('phaser', () => {
  const mockGame = {
    scene: {
      start: jest.fn(),
      getScenes: jest.fn().mockReturnValue([{ scene: { stop: jest.fn() } }]),
    },
  };

  const MockGame = function () {
    return mockGame;
  };

  return {
    __esModule: true,
    default: {
      Game: MockGame,
    },
  };
});

jest.mock('../../config/createGame.config', () => ({
  createGameConfig: jest.fn((container) => ({ parent: container })),
}));

jest.mock('../gameInstance', () => ({
  setGameInstance: jest.fn(),
}));

jest.mock('../../eventBus', () => ({
  gameEvents: {
    on: jest.fn(),
  },
}));

jest.mock('../../debug/exposeTestHook', () => ({
  exposeTestHook: jest.fn(),
}));

describe('createGame', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('sets up the game instance', () => {
    createGame('container');
    expect(setGameInstance).toHaveBeenCalled();
  });

  it('registers scene change handler', () => {
    createGame('container');
    expect(gameEvents.on).toHaveBeenCalledWith('scene-change', expect.any(Function));
  });
});
