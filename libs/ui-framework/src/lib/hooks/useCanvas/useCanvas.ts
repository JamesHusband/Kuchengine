import { useEffect, RefObject } from 'react';
import { getGameInstance } from '@kuchen/engine';

export const useCanvas = (containerRef: RefObject<HTMLDivElement>) => {
  console.info('Use Canvas');
  useEffect(() => {
    const container = containerRef.current;
    const game = getGameInstance();
    const canvas = game?.canvas;

    if (!canvas || !container) return;

    if (!container.contains(canvas)) {
      container.appendChild(canvas);
    }

    return () => {
      if (container.contains(canvas)) {
        container.removeChild(canvas);
      }
    };
  }, [containerRef]);
};
