import { useRef } from 'react';
import { usePhaserGame } from '../../hooks';

export const GameCanvas = () => {
  const containerRef = useRef<HTMLElement>(null);
  usePhaserGame(containerRef);
  return (
    <div ref={containerRef} className="w-full h-full" tabIndex={0} data-testid="game-canvas" role="presentation" />
  );
};
