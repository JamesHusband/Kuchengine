import { getGameInstance } from '../runtime/gameInstance';

export const exposeTestHook = () => {
  if (typeof window === 'undefined') return;
  if ((window as any).__kuchen) return;

  const game = getGameInstance();
  if (!game) return;
  (window as any).__kuchen = {
    getSceneKey: () => game.scene.getScenes(true)[0]?.scene.key,
    getGameInstance: () => game,
  };

  console.debug('🧪 window.__kuchen attached:', (window as any).__kuchen);
};
