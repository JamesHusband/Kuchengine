import { createMainMenuScene } from './scene.main-menu';

jest.mock('../create-scene', () => ({
  createScene: jest.fn().mockImplementation((key, render) => {
    const scene = {
      sys: { settings: { key } },
      add: {
        text: jest.fn(),
      },
    };
    render(scene);
    return scene;
  }),
}));

describe('createMainMenuScene', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create a main menu scene with the correct key', () => {
    const scene = createMainMenuScene();
    expect(scene.sys.settings.key).toBe('MainMenu');
  });

  it('should add text to the scene with correct parameters', () => {
    const scene = createMainMenuScene();

    expect(scene.add.text).toHaveBeenCalledWith(100, 100, 'Main Menu (React-driven)', {
      font: '24px Arial',
      color: '#ffffff',
    });
  });
});
