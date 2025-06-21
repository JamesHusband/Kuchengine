import { createScene } from './create-scene';

jest.mock('phaser', () => ({
  Scene: jest.fn().mockImplementation((key: string) => ({
    sys: {
      settings: { key },
    },
  })),
}));

type SceneWithCreate = {
  sys: {
    settings: { key: string };
  };
  create?: () => void;
};

describe('createScene', () => {
  it('should create a scene with the given key', () => {
    const sceneKey = 'TestScene';
    const scene = createScene(sceneKey, (scene) => {
      return scene;
    });

    expect(scene.sys.settings.key).toBe(sceneKey);
  });

  it('should execute the render function in the create lifecycle', () => {
    const renderMock = jest.fn();
    const scene = createScene('TestScene', renderMock) as SceneWithCreate;

    scene.create?.();

    expect(renderMock).toHaveBeenCalledWith(scene);
  });

  it('should preserve the scene context in the render function', () => {
    let capturedScene: SceneWithCreate | null = null;
    const scene = createScene('TestScene', (scene) => {
      capturedScene = scene;
      return scene;
    }) as SceneWithCreate;

    scene.create?.();

    expect(capturedScene).toBe(scene);
  });
});
