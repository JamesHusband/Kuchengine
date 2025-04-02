import { getInstance } from './getInstance.js';
import { setInstance } from '../setInstance/setInstance.js';
import type Phaser from 'phaser';

describe('getInstance', () => {
  beforeEach(() => {
    setInstance(null as unknown as Phaser.Game);
  });

  it('should return null when no instance has been set', () => {
    expect(getInstance()).toBeNull();
  });

  it('should return the instance after it has been set', () => {
    const mockGame = { foo: 'bar' } as unknown as Phaser.Game;
    setInstance(mockGame);
    expect(getInstance()).toBe(mockGame);
  });

  it('should return the latest instance after multiple sets', () => {
    const mockGame1 = { id: 1 } as unknown as Phaser.Game;
    const mockGame2 = { id: 2 } as unknown as Phaser.Game;

    setInstance(mockGame1);
    expect(getInstance()).toBe(mockGame1);

    setInstance(mockGame2);
    expect(getInstance()).toBe(mockGame2);
  });
});
