type EventCallback<T = unknown> = (arg: T) => void;

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
  emit: jest.fn((event: string, arg: unknown) => {
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

describe('createEventBus', () => {
  type TestEvents = {
    'test-event': string;
    'number-event': number;
    'void-event': void;
  };

  let eventBus: ReturnType<typeof createEventBus<TestEvents>>;

  beforeEach(() => {
    jest.clearAllMocks();
    mockEmitter.listeners.clear();
    eventBus = createEventBus<TestEvents>();
  });

  it('should create an event bus with required methods', () => {
    expect(eventBus).toHaveProperty('on');
    expect(eventBus).toHaveProperty('off');
    expect(eventBus).toHaveProperty('emit');
    expect(eventBus).toHaveProperty('subscribe');
  });

  it('should emit and receive events with data', () => {
    const mockCallback = jest.fn();
    eventBus.on('test-event', mockCallback);

    eventBus.emit('test-event', 'test data');
    expect(mockCallback).toHaveBeenCalledWith('test data');
  });

  it('should handle multiple subscribers', () => {
    const mockCallback1 = jest.fn();
    const mockCallback2 = jest.fn();

    eventBus.on('test-event', mockCallback1);
    eventBus.subscribe('test-event', mockCallback2);

    eventBus.emit('test-event', 'test data');

    expect(mockCallback1).toHaveBeenCalledWith('test data');
    expect(mockCallback2).toHaveBeenCalledWith('test data');
  });

  it('should properly remove event listeners', () => {
    const mockCallback = jest.fn();
    eventBus.on('test-event', mockCallback);

    eventBus.emit('test-event', 'test data');
    expect(mockCallback).toHaveBeenCalledTimes(1);

    eventBus.off('test-event', mockCallback);
    eventBus.emit('test-event', 'test data');
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  it('should handle different event types', () => {
    const stringCallback = jest.fn();
    const numberCallback = jest.fn();
    const voidCallback = jest.fn();

    eventBus.on('test-event', stringCallback);
    eventBus.on('number-event', numberCallback);
    eventBus.on('void-event', voidCallback);

    eventBus.emit('test-event', 'string data');
    eventBus.emit('number-event', 42);
    eventBus.emit('void-event', undefined);

    expect(stringCallback).toHaveBeenCalledWith('string data');
    expect(numberCallback).toHaveBeenCalledWith(42);
    expect(voidCallback).toHaveBeenCalledWith(undefined);
  });
});
