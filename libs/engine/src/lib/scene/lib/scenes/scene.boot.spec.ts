import { createBootScene } from './scene.boot';

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

describe('createBootScene', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create a boot scene with the correct key', () => {
    const scene = createBootScene();
    expect(scene.sys.settings.key).toBe('Boot');
  });

  it('should add text to the scene with correct parameters', () => {
    const scene = createBootScene();

    expect(scene.add.text).toHaveBeenCalledWith(250, 450, 'Boot Scene', {
      font: '20px Arial',
      color: '#ffffff',
    });
  });
});
