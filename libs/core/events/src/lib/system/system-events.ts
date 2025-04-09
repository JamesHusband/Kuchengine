import { createEventBus } from '../createEventBus';
import { SystemEventMap } from './SystemEventMap';

export const systemEvents = createEventBus<SystemEventMap>();
