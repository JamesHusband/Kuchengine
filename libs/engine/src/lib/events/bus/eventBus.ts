import Phaser from 'phaser';
import { TypedEmitter } from '../types';

const emitter = new Phaser.Events.EventEmitter();

export const gameEvents: TypedEmitter = {
  on: emitter.on.bind(emitter),
  off: emitter.off.bind(emitter),
  emit: emitter.emit.bind(emitter),
  subscribe: function (event, cb) {
    this.on(event, cb);
  },
};
