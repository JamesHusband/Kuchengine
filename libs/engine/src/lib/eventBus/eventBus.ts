import { TypedEmitter } from './eventBus.types';
import Phaser from 'phaser';
export const gameEvents: TypedEmitter = new Phaser.Events.EventEmitter();
