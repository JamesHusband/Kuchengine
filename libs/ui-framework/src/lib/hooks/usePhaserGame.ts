import { useEffect, useRef, RefObject } from 'react';
import { startGame, destroyGame } from '@kuchen/engine';

export const usePhaserGame = <T extends HTMLElement = HTMLElement>(containerRef: RefObject<T | null>) => {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current && containerRef.current) {
      startGame(containerRef.current);
      initialized.current = true;
    }

    return () => {
      destroyGame();
      initialized.current = false;
    };
  }, [containerRef]);
};
