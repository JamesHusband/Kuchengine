import { getInstance } from '@kuchen/game';

declare global {
  interface Window {
    __kuchen?: {
      getSceneKey: () => string | undefined;
      getInstance: () => Phaser.Game;
    };
  }
}

export const exposeTestHook = () => {
  if (typeof window === 'undefined') return;
  if (window.__kuchen) return;

  const game = getInstance();
  if (!game) return;
  window.__kuchen = {
    getSceneKey: () => game.scene.getScenes(true)[0]?.scene.key,
    getInstance: () => game,
  };
};
