import { useEffect } from 'react';
import { getInstance } from '@engine/instance';

export const useCanvas = (containerRef: React.RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    const container = containerRef.current;
    const canvas = getInstance()?.canvas;

    if (!canvas || !container) return;

    container.appendChild(canvas);

    return () => {
      if (container.contains(canvas)) {
        container.removeChild(canvas);
      }
    };
  }, [containerRef]);
};
