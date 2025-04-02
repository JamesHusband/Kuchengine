import { createEventBus } from '../createEventBus';
import { SceneEventMap } from './SceneEventMap';

export const sceneEvents = createEventBus<SceneEventMap>();
