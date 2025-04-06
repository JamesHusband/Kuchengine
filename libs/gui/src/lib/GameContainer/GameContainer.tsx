import { useRef } from 'react';
import { useCanvas } from '@kuchen/game';
import { Canvas } from '@kuchen/ui-kit';
import { useGame } from '@kuchen/game';

export const GameContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGame(containerRef);
  useCanvas(containerRef);

  return <Canvas containerRef={containerRef} />;
};
