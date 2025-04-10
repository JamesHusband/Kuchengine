import { useEffect } from 'react';

import { initializeGame, destroyGame } from './lib/game-lifecycle';

export const useGameInstance = (ref: React.RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    if (ref.current) {
      initializeGame(ref.current);
    }

    return () => {
      destroyGame();
    };
  }, [ref]);
};
