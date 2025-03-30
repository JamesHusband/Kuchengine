import { useEffect, useRef, RefObject } from 'react';
import { createGame, destroyGame } from '@kuchen/engine';

export const usePhaserGame = (containerRef: RefObject<HTMLDivElement | null>) => {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current && containerRef.current) {
      createGame(containerRef.current);
      initialized.current = true;
    }

    return () => {
      destroyGame();
      initialized.current = false;
    };
  }, [containerRef]);
};
