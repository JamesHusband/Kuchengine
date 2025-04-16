import { createGameScene } from './scene.game';

jest.mock('../create-scene', () => ({
  createScene: jest.fn().mockImplementation((key, render) => {
    const scene = {
      sys: { settings: { key } },
      add: {
        rectangle: jest.fn(),
      },
    };
    render(scene);
    return scene;
  }),
}));

describe('createGameScene', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create a game scene with the correct key', () => {
    const scene = createGameScene();
    expect(scene.sys.settings.key).toBe('Game');
  });

  it('should add a rectangle to the scene with correct parameters', () => {
    const scene = createGameScene();

    expect(scene.add.rectangle).toHaveBeenCalledWith(400, 300, 100, 100, 0xff0000);
  });
});
