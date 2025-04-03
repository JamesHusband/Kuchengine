import { sceneEvents } from '@core/events';

export const sceneHooks = {
  notifySceneReady: (key: string) => sceneEvents.emit('scene-ready', key),
  onSceneReady: (callback: (key: string) => void) => sceneEvents.subscribe('scene-ready', callback),
};
