import { getGameInstance } from '../runtime/gameInstance';

declare global {
  interface Window {
    __kuchen?: {
      getSceneKey: () => string | undefined;
      getGameInstance: () => Phaser.Game;
    };
  }
}

export const exposeTestHook = () => {
  if (typeof window === 'undefined') return;
  if (window.__kuchen) return;

  const game = getGameInstance();
  if (!game) return;
  window.__kuchen = {
    getSceneKey: () => game.scene.getScenes(true)[0]?.scene.key,
    getGameInstance: () => game,
  };

  console.debug('🧪 window.__kuchen attached:', window.__kuchen);
};
