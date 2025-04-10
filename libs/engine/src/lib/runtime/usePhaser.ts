import { useEffect } from 'react';

import { bootstrapGame } from './bootstrap';
import { destroyGame } from './destroyGame';

export const usePhaser = (ref: React.RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    if (ref.current) {
      bootstrapGame(ref.current);
    }

    return () => {
      destroyGame();
    };
  }, [ref]);
};
