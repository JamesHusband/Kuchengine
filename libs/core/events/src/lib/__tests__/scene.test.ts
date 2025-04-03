type EventCallback = (...args: any[]) => void;

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
  emit: jest.fn((event: string, ...args: any[]) => {
    const listeners = mockEmitter.listeners.get(event);
    if (listeners) {
      listeners.forEach((callback) => callback(...args));
    }
  }),
};

jest.mock('phaser', () => ({
  Events: {
    EventEmitter: jest.fn(() => mockEmitter),
  },
}));

import { createEventBus } from '../createEventBus.js';
import type { SceneEventMap } from '../scene/SceneEventMap.js';

describe('Scene Events', () => {
  let eventBus: ReturnType<typeof createEventBus<SceneEventMap>>;

  beforeEach(() => {
    jest.clearAllMocks();
    mockEmitter.listeners.clear();
    eventBus = createEventBus<SceneEventMap>();
  });

  it('should handle scene change events', () => {
    const mockCallback = jest.fn();
    eventBus.on('scene-change', mockCallback);

    const sceneName = 'MainMenu';
    eventBus.emit('scene-change', sceneName);

    expect(mockCallback).toHaveBeenCalledWith(sceneName);
  });

  it('should handle scene ready events', () => {
    const mockCallback = jest.fn();
    eventBus.on('scene-ready', mockCallback);

    const sceneName = 'GameScene';
    eventBus.emit('scene-ready', sceneName);

    expect(mockCallback).toHaveBeenCalledWith(sceneName);
  });

  it('should allow unsubscribing from scene events', () => {
    const mockCallback = jest.fn();
    eventBus.on('scene-change', mockCallback);

    eventBus.emit('scene-change', 'Scene1');
    expect(mockCallback).toHaveBeenCalledTimes(1);

    eventBus.off('scene-change', mockCallback);
    eventBus.emit('scene-change', 'Scene2');
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  it('should handle multiple scene event subscribers', () => {
    const mockCallback1 = jest.fn();
    const mockCallback2 = jest.fn();

    eventBus.on('scene-ready', mockCallback1);
    eventBus.subscribe('scene-ready', mockCallback2);

    const sceneName = 'LoadingScene';
    eventBus.emit('scene-ready', sceneName);

    expect(mockCallback1).toHaveBeenCalledWith(sceneName);
    expect(mockCallback2).toHaveBeenCalledWith(sceneName);
  });
});
