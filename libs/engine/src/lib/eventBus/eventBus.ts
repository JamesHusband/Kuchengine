import Phaser from 'phaser';
import { TypedEmitter } from './types';

export const gameEvents: TypedEmitter = new Phaser.Events.EventEmitter();
