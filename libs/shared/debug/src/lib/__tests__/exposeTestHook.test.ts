import { exposeTestHook } from '../exposeTestHook';
import { getInstance } from '@kuchen/game';

const mockInstance = {
  scene: {
    getScenes: () => [{ scene: { key: 'MainMenuScene' } }],
  },
} as Phaser.Game;

jest.mock('@kuchen/game', () => ({
  getInstance: jest.fn(() => mockInstance),
}));

type KuchenWindow = Window & {
  __kuchen?: {
    getSceneKey: () => string | undefined;
    getInstance: () => Phaser.Game;
  };
};

describe('exposeTestHook', () => {
  beforeEach(() => {
    delete (window as KuchenWindow).__kuchen;
  });

  afterEach(() => {
    jest.clearAllMocks();
    delete (window as KuchenWindow).__kuchen;
  });

  it('should expose test hook on window with scene key and instance access', () => {
    exposeTestHook();

    expect(window.__kuchen).toBeDefined();
    expect(window.__kuchen?.getSceneKey()).toBe('MainMenuScene');
    expect(window.__kuchen?.getInstance()).toBe(mockInstance);
  });

  it('should do nothing if window is already hooked', () => {
    const mock = {
      getInstance: () => mockInstance,
      getSceneKey: () => 'existing-key' as string | undefined,
    };
    (window as KuchenWindow).__kuchen = mock;

    exposeTestHook();

    expect(window.__kuchen).toBe(mock);
  });

  it('should do nothing if getInstance returns undefined', () => {
    (getInstance as jest.Mock).mockReturnValueOnce(undefined);

    exposeTestHook();

    expect(window.__kuchen).toBeUndefined();
  });
});
