import { createEventBus } from './createEventBus';
import type { GameEventMap } from '../types';

export const gameEvents = createEventBus<GameEventMap>();
