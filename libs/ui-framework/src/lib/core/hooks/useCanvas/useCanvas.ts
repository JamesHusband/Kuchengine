import { useEffect } from 'react';
import { getGameInstance } from '@kuchen/engine';

export const useCanvas = (containerRef: React.RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    const container = containerRef.current;
    const canvas = getGameInstance()?.canvas;

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
