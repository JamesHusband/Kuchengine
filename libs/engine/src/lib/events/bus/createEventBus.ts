import Phaser from 'phaser';
import type { TypedEmitter } from '../types';

export const createEventBus = <T extends Record<string, unknown | void>>(): TypedEmitter<T> => {
  const emitter = new Phaser.Events.EventEmitter();

  const on = <K extends keyof T>(event: K, cb: (data: T[K]) => void) => {
    emitter.on(event as string, cb);
  };

  const off = <K extends keyof T>(event: K, cb: (data: T[K]) => void) => {
    emitter.off(event as string, cb);
  };

  const emit = <K extends keyof T>(event: K, ...args: T[K] extends void ? [] : [data: T[K]]) => {
    emitter.emit(event as string, ...(args as [T[K]]));
  };

  const subscribe = <K extends keyof T>(event: K, cb: (data: T[K]) => void) => {
    on(event, cb);
  };

  return {
    on,
    off,
    emit,
    subscribe,
  };
};
