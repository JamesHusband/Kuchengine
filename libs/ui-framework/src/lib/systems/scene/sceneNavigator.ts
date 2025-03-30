import { gameEvents } from '@kuchen/engine';

export const goToScene = (sceneKey: string) => {
  gameEvents.emit('scene-change', sceneKey);
};
