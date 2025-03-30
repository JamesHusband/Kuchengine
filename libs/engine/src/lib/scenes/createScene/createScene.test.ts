import { createScene } from './createScene.js';
import { gameEvents } from '../../eventBus/eventBus.js';
import type Phaser from 'phaser';
import type { SceneConfig } from '../types.js';

jest.mock('../../eventBus/eventBus.js', () => ({
  gameEvents: {
    emit: jest.fn(),
  },
}));

describe('createScene', () => {
  const TEST_SCENE_KEY = 'test-scene';
  const TEST_TIME = 1000;
  const TEST_DELTA = 16;

  const mockScene = {
    add: jest.fn(),
    load: jest.fn(),
    time: {
      now: jest.fn(),
    },
  } as unknown as Phaser.Scene;

  let scene: SceneConfig;
  let preloadMock: jest.MockedFunction<(this: Phaser.Scene) => void>;
  let createMock: jest.MockedFunction<(this: Phaser.Scene) => void>;
  let updateMock: jest.MockedFunction<(this: Phaser.Scene, time: number, delta: number) => void>;
  let shutdownMock: jest.MockedFunction<(this: Phaser.Scene) => void>;

  beforeEach(() => {
    jest.clearAllMocks();
    preloadMock = jest.fn();
    createMock = jest.fn();
    updateMock = jest.fn();
    shutdownMock = jest.fn();
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
      (method as (this: Phaser.Scene, ...args: T extends 'update' ? [number, number] : []) => void).call(
        mockScene,
        ...args,
      );
    }
  };

  describe('initialization', () => {
    it('should create a scene with the provided key', () => {
      createTestScene();
      expect(scene.key).toBe(TEST_SCENE_KEY);
    });
  });

  describe('lifecycle methods', () => {
    describe('preload', () => {
      it('should call preload method if provided', () => {
        createTestScene({ preload: preloadMock });
        callSceneMethod('preload');
        expect(preloadMock).toHaveBeenCalled();
      });

      it('should not throw if preload is not provided', () => {
        createTestScene();
        expect(() => callSceneMethod('preload')).not.toThrow();
      });
    });

    describe('create', () => {
      it('should emit scene-ready event and call create method if provided', () => {
        createTestScene({ create: createMock });
        callSceneMethod('create');
        expect(gameEvents.emit).toHaveBeenCalledWith('scene-ready', TEST_SCENE_KEY);
        expect(createMock).toHaveBeenCalled();
      });

      it('should not throw if create is not provided', () => {
        createTestScene();
        expect(() => callSceneMethod('create')).not.toThrow();
        expect(gameEvents.emit).toHaveBeenCalledWith('scene-ready', TEST_SCENE_KEY);
      });
    });

    describe('update', () => {
      it('should call update method if provided', () => {
        createTestScene({ update: updateMock });
        callSceneMethod('update', TEST_TIME, TEST_DELTA);
        expect(updateMock).toHaveBeenCalledWith(TEST_TIME, TEST_DELTA);
      });

      it('should not throw if update is not provided', () => {
        createTestScene();
        expect(() => callSceneMethod('update', TEST_TIME, TEST_DELTA)).not.toThrow();
      });
    });

    describe('shutdown', () => {
      it('should call shutdown method if provided', () => {
        createTestScene({ shutdown: shutdownMock });
        callSceneMethod('shutdown');
        expect(shutdownMock).toHaveBeenCalled();
      });

      it('should not throw if shutdown is not provided', () => {
        createTestScene();
        expect(() => callSceneMethod('shutdown')).not.toThrow();
      });
    });
  });

  describe('integration', () => {
    it('should maintain correct this context in all methods', () => {
      createTestScene({
        preload: preloadMock,
        create: createMock,
        update: updateMock,
        shutdown: shutdownMock,
      });

      callSceneMethod('preload');
      callSceneMethod('create');
      callSceneMethod('update', TEST_TIME, TEST_DELTA);
      callSceneMethod('shutdown');

      expect(preloadMock).toHaveBeenCalled();
      expect(createMock).toHaveBeenCalled();
      expect(updateMock).toHaveBeenCalledWith(TEST_TIME, TEST_DELTA);
      expect(shutdownMock).toHaveBeenCalled();
    });
  });
});
