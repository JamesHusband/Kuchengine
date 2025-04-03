/**
 * @jest-environment jsdom
 */

jest.mock('phaser', () => {
  return {
    Game: jest.fn().mockImplementation(() => ({
      events: {
        once: jest.fn((event, cb) => {
          if (event === 'ready') cb();
        }),
      },
    })),
  };
});

jest.mock('@core/debug', () => ({
  exposeTestHook: jest.fn(),
}));

jest.mock('@core/events', () => ({
  initializeEventHandlers: jest.fn(),
}));

jest.mock('../config/createGame.config', () => ({
  createGameConfig: jest.fn(() => ({ mock: 'config' })),
}));

jest.mock('../setInstance', () => ({
  setInstance: jest.fn(),
}));

import Phaser from 'phaser';
import { createInstance } from '../createInstance';
import { exposeTestHook } from '@core/debug';
import { initializeEventHandlers } from '@core/events';
import { createGameConfig } from '../config/createGame.config';
import { setInstance } from '../setInstance';

describe('createInstance (no spyOn)', () => {
  it('creates a Phaser.Game and initializes systems', () => {
    const result = createInstance('game-container');

    expect(createGameConfig).toHaveBeenCalledWith('game-container');
    expect(Phaser.Game).toHaveBeenCalledWith({ mock: 'config' });
    expect(setInstance).toHaveBeenCalledWith(expect.any(Object));
    expect(initializeEventHandlers).toHaveBeenCalledWith(expect.any(Object));
    expect(exposeTestHook).toHaveBeenCalled();
    expect(Phaser.Game).toHaveBeenCalled();
    expect(result).toEqual(expect.any(Object));
  });
});
