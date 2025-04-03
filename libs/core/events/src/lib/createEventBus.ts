import Phaser from 'phaser';

export const createEventBus = <T extends Record<string, unknown>>() => {
  const emitter = new Phaser.Events.EventEmitter();

  return {
    on: <K extends keyof T>(event: K, cb: (data: T[K]) => void) => {
      emitter.on(event as string, cb);
    },
    off: <K extends keyof T>(event: K, cb: (data: T[K]) => void) => {
      emitter.off(event as string, cb);
    },
    emit: <K extends keyof T>(event: K, data: T[K]) => {
      emitter.emit(event as string, data);
    },
    subscribe: function <K extends keyof T>(event: K, cb: (data: T[K]) => void) {
      this.on(event, cb);
    },
  };
};
