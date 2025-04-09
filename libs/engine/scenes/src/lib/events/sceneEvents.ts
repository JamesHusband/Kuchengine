import { sceneEvents } from '@engine/events';


export const notifySceneReady = (key: string) => sceneEvents.emit('scene-ready', key);

