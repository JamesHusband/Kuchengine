import { setInstance, Instance } from './setInstance.js';
import Phaser from 'phaser';

describe('setInstance', () => {
  it('should set the Instance variable', () => {
    const mockGame = {} as Phaser.Game;
    setInstance(mockGame);
    expect(Instance).toBe(mockGame);
  });

  it('should update Instance when called multiple times', () => {
    const firstGame = {} as Phaser.Game;
    const secondGame = {} as Phaser.Game;

    setInstance(firstGame);
    expect(Instance).toBe(firstGame);

    setInstance(secondGame);
    expect(Instance).toBe(secondGame);
  });
});
