import { createScene } from './createScene.js';
import { sceneEvents } from '../../events/index.js';
import type { SceneConfig } from '../types.js';

jest.mock('../../events', () => ({
  sceneEvents: { emit: jest.fn() },
}));

jest.mock('phaser', () => {
  const mockScene = jest.fn().mockImplementation(() => ({}));
  return {
    Scene: mockScene,
  };
});

describe('createScene', () => {
  const TEST_SCENE_KEY = 'test-scene';
  const TEST_TIME = 1000;
  const TEST_DELTA = 16;

  let scene: SceneConfig;
  const mockMethods = {
    preload: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    shutdown: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    Object.values(mockMethods).forEach((mock) => mock.mockClear());
  });

  const createTestScene = (config: Partial<Omit<SceneConfig, 'key'>> = {}) => {
    scene = createScene(TEST_SCENE_KEY, config);
    return scene;
  };

  const callSceneMethod = <T extends keyof SceneConfig>(
    methodName: T,
    ...args: T extends 'update' ? [number, number] : []
  ) => {
    const method = scene[methodName];
    if (method) {
      method(...args);
    }
  };

  describe('lifecycle methods', () => {
    it('should create a scene with the provided key', () => {
      createTestScene();
      expect(scene.key).toBe(TEST_SCENE_KEY);
    });

    it('should handle all lifecycle methods correctly', () => {
      createTestScene(mockMethods);

      callSceneMethod('preload');
      expect(mockMethods.preload).toHaveBeenCalled();

      callSceneMethod('create');
      expect(sceneEvents.emit).toHaveBeenCalledWith('scene-ready', TEST_SCENE_KEY);
      expect(mockMethods.create).toHaveBeenCalled();

      callSceneMethod('update', TEST_TIME, TEST_DELTA);
      expect(mockMethods.update).toHaveBeenCalledWith(TEST_TIME, TEST_DELTA);

      callSceneMethod('shutdown');
      expect(mockMethods.shutdown).toHaveBeenCalled();
    });

    it('should not throw when optional methods are not provided', () => {
      createTestScene({});
      expect(() => {
        callSceneMethod('preload');
        callSceneMethod('create');
        callSceneMethod('update', TEST_TIME, TEST_DELTA);
        callSceneMethod('shutdown');
      }).not.toThrow();
    });
  });
});
