import type Phaser from 'phaser';
import { setGameInstance, getGameInstance, destroyGameInstance } from './gameInstance.js';

describe('gameInstance', () => {
  let mockGame: Phaser.Game;

  beforeEach(() => {
    mockGame = {
      destroy: jest.fn(),
    } as unknown as Phaser.Game;

    setGameInstance(mockGame);
  });

  afterEach(() => {
    destroyGameInstance();
  });

  it('should store and return the game instance', () => {
    const instance = getGameInstance();
    expect(instance).toBe(mockGame);
  });

  it('should destroy the game instance and clear it', () => {
    destroyGameInstance();

    expect(mockGame.destroy).toHaveBeenCalledWith(true);
    expect(getGameInstance()).toBeNull();
  });

  it('should not throw if destroying a null instance', () => {
    destroyGameInstance();
    expect(() => destroyGameInstance()).not.toThrow();
  });
});
