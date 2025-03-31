import { gameEvents } from './eventBus.js';

jest.mock('phaser', () => ({
  __esModule: true,
  default: {
    Events: {
      EventEmitter: class {
        listeners: Record<string, Array<(data: any) => void>> = {};

        on(event: string, cb: (data: any) => void) {
          this.listeners[event] = this.listeners[event] || [];
          this.listeners[event].push(cb);
        }

        off(event: string, cb: (data: any) => void) {
          this.listeners[event] = (this.listeners[event] || []).filter((fn) => fn !== cb);
        }

        emit(event: string, data?: any) {
          for (const fn of this.listeners[event] || []) {
            fn(data);
          }
        }
      },
    },
  },
}));

describe('gameEvents (TypedEmitter)', () => {
  beforeEach(() => {
    (gameEvents as any).listeners = {};
  });

  describe('String payload events', () => {
    it('should emit and receive "scene-change" event with string', () => {
      const callback = jest.fn();
      gameEvents.on('scene-change', callback);
      gameEvents.emit('scene-change', 'MainMenuScene');
      expect(callback).toHaveBeenCalledWith('MainMenuScene');
    });

    it('should emit and receive "scene-ready" event with string', () => {
      const callback = jest.fn();
      gameEvents.on('scene-ready', callback);
      gameEvents.emit('scene-ready', 'GameScene');
      expect(callback).toHaveBeenCalledWith('GameScene');
    });
  });

  describe('Void events', () => {
    it('should emit and receive "game-paused" event without payload', () => {
      const callback = jest.fn();
      gameEvents.on('game-paused', callback);
      gameEvents.emit('game-paused');
      expect(callback).toHaveBeenCalledWith(undefined);
    });

    it('should emit and receive "game-resumed" event without payload', () => {
      const callback = jest.fn();
      gameEvents.on('game-resumed', callback);
      gameEvents.emit('game-resumed');
      expect(callback).toHaveBeenCalledWith(undefined);
    });
  });

  describe('Boolean payload events', () => {
    it('should emit and receive "hud-toggled" event with boolean', () => {
      const callback = jest.fn();
      gameEvents.on('hud-toggled', callback);
      gameEvents.emit('hud-toggled', true);
      expect(callback).toHaveBeenCalledWith(true);
    });
  });

  describe('Event listener management', () => {
    it('should remove listener using .off', () => {
      const callback = jest.fn();
      gameEvents.on('hud-toggled', callback);
      gameEvents.off('hud-toggled', callback);
      gameEvents.emit('hud-toggled', true);
      expect(callback).not.toHaveBeenCalled();
    });

    it('should support multiple listeners for same event', () => {
      const callback1 = jest.fn();
      const callback2 = jest.fn();
      gameEvents.on('scene-change', callback1);
      gameEvents.on('scene-change', callback2);
      gameEvents.emit('scene-change', 'MainMenu');
      expect(callback1).toHaveBeenCalledWith('MainMenu');
      expect(callback2).toHaveBeenCalledWith('MainMenu');
    });

    it('should only remove specified listener when multiple exist', () => {
      const callback1 = jest.fn();
      const callback2 = jest.fn();
      gameEvents.on('scene-change', callback1);
      gameEvents.on('scene-change', callback2);
      gameEvents.off('scene-change', callback1);
      gameEvents.emit('scene-change', 'MainMenu');
      expect(callback1).not.toHaveBeenCalled();
      expect(callback2).toHaveBeenCalledWith('MainMenu');
    });
  });

  describe('Subscribe method', () => {
    it('should work like .on for string payload', () => {
      const callback = jest.fn();
      gameEvents.subscribe('scene-ready', callback);
      gameEvents.emit('scene-ready', 'GameScene');
      expect(callback).toHaveBeenCalledWith('GameScene');
    });

    it('should work like .on for void events', () => {
      const callback = jest.fn();
      gameEvents.subscribe('game-paused', callback);
      gameEvents.emit('game-paused');
      expect(callback).toHaveBeenCalledWith(undefined);
    });

    it('should work like .on for boolean payload', () => {
      const callback = jest.fn();
      gameEvents.subscribe('hud-toggled', callback);
      gameEvents.emit('hud-toggled', false);
      expect(callback).toHaveBeenCalledWith(false);
    });
  });

  describe('Edge cases', () => {
    it('should handle emitting to non-existent event', () => {
      expect(() => {
        gameEvents.emit('scene-change', 'test');
      }).not.toThrow();
    });

    it('should handle removing non-existent listener', () => {
      const callback = jest.fn();
      expect(() => {
        gameEvents.off('scene-change', callback);
      }).not.toThrow();
    });

    it('should handle multiple off calls for same listener', () => {
      const callback = jest.fn();
      gameEvents.on('scene-change', callback);
      gameEvents.off('scene-change', callback);
      gameEvents.off('scene-change', callback);
      expect(() => {
        gameEvents.emit('scene-change', 'test');
      }).not.toThrow();
    });
  });
});
