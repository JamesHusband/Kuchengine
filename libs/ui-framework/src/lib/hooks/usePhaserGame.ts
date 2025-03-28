import { useEffect, useRef, RefObject } from 'react';
import { createGame, destroyGame } from '@kuchen/engine';

export const usePhaserGame = <T extends HTMLElement = HTMLElement>(containerRef: RefObject<T | null>) => {
  const initialized = useRef(false);

  useEffect(() => {
    console.log('✅ GameCanvas useEffect running');
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
