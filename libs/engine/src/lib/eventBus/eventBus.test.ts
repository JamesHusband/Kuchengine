import { gameEvents } from './eventBus.js';

jest.mock('phaser', () => ({
  Events: {
    EventEmitter: jest.fn().mockImplementation(() => {
      const listeners: Record<string, ((data?: any) => void)[]> = {};

      return {
        on: jest.fn((event: string, callback: (data?: any) => void) => {
          if (!listeners[event]) {
            listeners[event] = [];
          }
          listeners[event].push(callback);
        }),
        off: jest.fn((event: string, callback: (data?: any) => void) => {
          if (listeners[event]) {
            listeners[event] = listeners[event].filter((cb) => cb !== callback);
          }
        }),
        emit: jest.fn((event: string, data: any) => {
          if (listeners[event]) {
            listeners[event].forEach((callback) => {
              if (data === undefined) {
                callback();
              } else {
                callback(data);
              }
            });
          }
        }),
        removeAllListeners: jest.fn(() => {
          Object.keys(listeners).forEach((key) => {
            listeners[key] = [];
          });
        }),
      };
    }),
  },
}));

describe('gameEvents', () => {
  let mockCallback: jest.Mock;
  let mockEventEmitter: any;

  beforeEach(() => {
    mockCallback = jest.fn();
    mockEventEmitter = gameEvents;
  });

  describe('scene-change event', () => {
    const sceneName = 'test-scene';

    beforeEach(() => {
      mockEventEmitter.on('scene-change', mockCallback);
    });

    it('should emit and receive scene-change event with string data', () => {
      mockEventEmitter.emit('scene-change', sceneName);
      expect(mockEventEmitter.emit).toHaveBeenCalledWith('scene-change', sceneName);
      expect(mockCallback).toHaveBeenCalledWith(sceneName);
    });

    it('should remove listener when off is called', () => {
      mockEventEmitter.off('scene-change', mockCallback);
      mockEventEmitter.emit('scene-change', sceneName);
      expect(mockEventEmitter.off).toHaveBeenCalledWith('scene-change', mockCallback);
      expect(mockCallback).not.toHaveBeenCalled();
    });
  });

  describe('game-paused event', () => {
    beforeEach(() => {
      mockEventEmitter.on('game-paused', mockCallback);
    });

    it('should emit and receive game-paused event with void data', () => {
      mockEventEmitter.emit('game-paused', undefined);
      expect(mockEventEmitter.emit).toHaveBeenCalledWith('game-paused', undefined);
      expect(mockCallback).toHaveBeenCalledWith();
    });
  });

  describe('hud-toggled event', () => {
    beforeEach(() => {
      mockEventEmitter.on('hud-toggled', mockCallback);
    });

    it('should emit and receive hud-toggled event with boolean data', () => {
      const isVisible = true;
      mockEventEmitter.emit('hud-toggled', isVisible);
      expect(mockEventEmitter.emit).toHaveBeenCalledWith('hud-toggled', isVisible);
      expect(mockCallback).toHaveBeenCalledWith(isVisible);
    });
  });

  describe('error handling', () => {
    it('should not throw when removing non-existent listener', () => {
      expect(() => mockEventEmitter.off('scene-change', mockCallback)).not.toThrow();
    });

    it('should handle multiple off calls for the same listener', () => {
      mockEventEmitter.on('scene-change', mockCallback);
      expect(() => {
        mockEventEmitter.off('scene-change', mockCallback);
        mockEventEmitter.off('scene-change', mockCallback);
      }).not.toThrow();
    });
  });
});
