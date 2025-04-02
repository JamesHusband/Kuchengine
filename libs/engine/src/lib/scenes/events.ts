import { sceneEvents as sceneEventBus } from '../events';

export const sceneEvents = {
  notifySceneReady: (key: string) => sceneEventBus.emit('scene-ready', key),
  onSceneReady: (callback: (key: string) => void) => sceneEventBus.subscribe('scene-ready', callback),
};
