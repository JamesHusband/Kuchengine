import { gameEvents } from '../events';

export const sceneEvents = {
  notifySceneReady: (key: string) => gameEvents.emit('scene-ready', key),
  onSceneReady: (callback: (key: string) => void) => gameEvents.subscribe('scene-ready', callback),
};
