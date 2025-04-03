import { createScene } from '../factory/createScene';
import { sceneHooks } from '../events';

jest.mock('../events', () => ({
  sceneHooks: {
    notifySceneReady: jest.fn(),
  },
}));

describe('createScene', () => {
  const mockContext = {} as Phaser.Scene;
  const sceneKey = 'TestScene';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create a scene config with the provided key', () => {
    const scene = createScene(sceneKey, {});
    expect(scene.key).toBe(sceneKey);
  });

  it('should call preload method when provided', () => {
    const preloadMock = jest.fn();
    const scene = createScene(sceneKey, { preload: preloadMock });

    scene.preload?.call(mockContext);
    expect(preloadMock).toHaveBeenCalledWith();
  });

  it('should call create method and notify scene ready', () => {
    const createMock = jest.fn();
    const scene = createScene(sceneKey, { create: createMock });

    scene.create?.call(mockContext);
    expect(sceneHooks.notifySceneReady).toHaveBeenCalledWith(sceneKey);
    expect(createMock).toHaveBeenCalledWith();
  });

  it('should call update method with time and delta', () => {
    const updateMock = jest.fn();
    const scene = createScene(sceneKey, { update: updateMock });

    const time = 100;
    const delta = 16;
    scene.update?.call(mockContext, time, delta);
    expect(updateMock).toHaveBeenCalledWith(time, delta);
  });

  it('should call shutdown method when provided', () => {
    const shutdownMock = jest.fn();
    const scene = createScene(sceneKey, { shutdown: shutdownMock });

    scene.shutdown?.call(mockContext);
    expect(shutdownMock).toHaveBeenCalledWith();
  });

  it('should handle missing optional methods', () => {
    const scene = createScene(sceneKey, {});

    expect(() => scene.preload?.call(mockContext)).not.toThrow();
    expect(() => scene.create?.call(mockContext)).not.toThrow();
    expect(() => scene.update?.call(mockContext, 0, 0)).not.toThrow();
    expect(() => scene.shutdown?.call(mockContext)).not.toThrow();
  });
});
