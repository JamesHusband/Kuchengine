type EventCallback<T = boolean | void> = (arg: T) => void;

const mockEmitter = {
  listeners: new Map<string, EventCallback[]>(),
  on: jest.fn((event: string, callback: EventCallback) => {
    if (!mockEmitter.listeners.has(event)) {
      mockEmitter.listeners.set(event, []);
    }
    mockEmitter.listeners.get(event)?.push(callback);
  }),
  off: jest.fn((event: string, callback: EventCallback) => {
    const listeners = mockEmitter.listeners.get(event);
    if (listeners) {
      const index = listeners.indexOf(callback);
      if (index !== -1) {
        listeners.splice(index, 1);
      }
    }
  }),
  emit: jest.fn((event: string, arg: boolean | void) => {
    const listeners = mockEmitter.listeners.get(event);
    if (listeners) {
      listeners.forEach((callback) => callback(arg));
    }
  }),
};

jest.mock('phaser', () => ({
  Events: {
    EventEmitter: jest.fn(() => mockEmitter),
  },
}));

import { createEventBus } from '../createEventBus.js';
import type { SystemEventMap } from '../system/SystemEventMap.js';

describe('System Events', () => {
  let eventBus: ReturnType<typeof createEventBus<SystemEventMap>>;

  beforeEach(() => {
    jest.clearAllMocks();
    mockEmitter.listeners.clear();
    eventBus = createEventBus<SystemEventMap>();
  });

  it('should handle game pause events', () => {
    const mockCallback = jest.fn();
    eventBus.on('game-paused', mockCallback);

    eventBus.emit('game-paused', undefined);
    expect(mockCallback).toHaveBeenCalledWith(undefined);
  });

  it('should handle game resume events', () => {
    const mockCallback = jest.fn();
    eventBus.on('game-resumed', mockCallback);

    eventBus.emit('game-resumed', undefined);
    expect(mockCallback).toHaveBeenCalledWith(undefined);
  });

  it('should handle HUD toggle events', () => {
    const mockCallback = jest.fn();
    eventBus.on('hud-toggled', mockCallback);

    eventBus.emit('hud-toggled', true);
    expect(mockCallback).toHaveBeenCalledWith(true);

    eventBus.emit('hud-toggled', false);
    expect(mockCallback).toHaveBeenCalledWith(false);
  });

  it('should handle game restart events', () => {
    const mockCallback = jest.fn();
    eventBus.on('game-restart', mockCallback);

    eventBus.emit('game-restart', undefined);
    expect(mockCallback).toHaveBeenCalledWith(undefined);
  });

  it('should handle open options events', () => {
    const mockCallback = jest.fn();
    eventBus.on('open-options', mockCallback);

    eventBus.emit('open-options', undefined);
    expect(mockCallback).toHaveBeenCalledWith(undefined);
  });

  it('should handle multiple system events simultaneously', () => {
    const pauseCallback = jest.fn();
    const hudCallback = jest.fn();
    const optionsCallback = jest.fn();

    eventBus.on('game-paused', pauseCallback);
    eventBus.on('hud-toggled', hudCallback);
    eventBus.on('open-options', optionsCallback);

    eventBus.emit('game-paused', undefined);
    eventBus.emit('hud-toggled', true);
    eventBus.emit('open-options', undefined);

    expect(pauseCallback).toHaveBeenCalledWith(undefined);
    expect(hudCallback).toHaveBeenCalledWith(true);
    expect(optionsCallback).toHaveBeenCalledWith(undefined);
  });

  it('should allow unsubscribing from system events', () => {
    const mockCallback = jest.fn();
    eventBus.on('game-restart', mockCallback);

    eventBus.emit('game-restart', undefined);
    expect(mockCallback).toHaveBeenCalledTimes(1);

    eventBus.off('game-restart', mockCallback);
    eventBus.emit('game-restart', undefined);
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
});
