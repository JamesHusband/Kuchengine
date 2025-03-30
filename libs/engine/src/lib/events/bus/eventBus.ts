import Phaser from 'phaser';
import { TypedEmitter } from '../types.js';

export const gameEvents: TypedEmitter = new Phaser.Events.EventEmitter();
