import { registerScenes } from './register-scenes';
import { createBootScene, createMainMenuScene, createGameScene } from './scenes/index';

type MockScene = {
  sys: {
    settings: {
      key: string;
    };
  };
};

// Mock the scene creators
jest.mock('./scenes/index', () => ({
  createBootScene: jest.fn().mockReturnValue({ sys: { settings: { key: 'Boot' } } }),
  createMainMenuScene: jest.fn().mockReturnValue({ sys: { settings: { key: 'MainMenu' } } }),
  createGameScene: jest.fn().mockReturnValue({ sys: { settings: { key: 'Game' } } }),
}));

describe('registerScenes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call all scene creators', () => {
    registerScenes();

    expect(createBootScene).toHaveBeenCalled();
    expect(createMainMenuScene).toHaveBeenCalled();
    expect(createGameScene).toHaveBeenCalled();
  });

  it('should return scenes in the correct order', () => {
    const scenes = registerScenes() as MockScene[];

    expect(scenes).toHaveLength(3);
    expect(scenes[0].sys.settings.key).toBe('Boot');
    expect(scenes[1].sys.settings.key).toBe('MainMenu');
    expect(scenes[2].sys.settings.key).toBe('Game');
  });
});
