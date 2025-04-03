import { sceneEvents } from '@core/events';
import { sceneHooks } from '../events';

jest.mock('@core/events', () => ({
  sceneEvents: {
    emit: jest.fn(),
    subscribe: jest.fn(),
  },
}));

describe('sceneHooks', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('notifySceneReady', () => {
    it('should emit scene-ready event with scene key', () => {
      const sceneKey = 'TestScene';
      sceneHooks.notifySceneReady(sceneKey);
      expect(sceneEvents.emit).toHaveBeenCalledWith('scene-ready', sceneKey);
    });
  });

  describe('onSceneReady', () => {
    it('should subscribe to scene-ready event with callback', () => {
      const callback = jest.fn();
      sceneHooks.onSceneReady(callback);
      expect(sceneEvents.subscribe).toHaveBeenCalledWith('scene-ready', callback);
    });
  });
});
