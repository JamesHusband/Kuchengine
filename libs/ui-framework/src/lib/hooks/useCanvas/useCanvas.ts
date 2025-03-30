import { useEffect, RefObject } from 'react';
import { getGameInstance } from '@kuchen/engine';

export const useCanvas = (containerRef: RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const container = containerRef.current;
    const game = getGameInstance();
    const canvas = game?.canvas;

    if (!canvas || !container) return;

    // Ensure canvas is visible and properly sized
    canvas.style.display = 'block';
    canvas.style.width = '100%';
    canvas.style.height = '100%';

    // Attach canvas if not already inside
    if (!container.contains(canvas)) {
      container.appendChild(canvas);
    }

    return () => {
      if (container.contains(canvas)) {
        container.removeChild(canvas);
      }
      canvas.style.display = 'none';
    };
  }, [containerRef]);
};
