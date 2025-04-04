import { useRef } from 'react';
import { useCanvas } from '../hooks/useCanvas';
import { Canvas } from '@kuchen/ui-kit';
import { useGame } from '@kuchen/ui-framework';

export const GameContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGame(containerRef);
  useCanvas(containerRef);

  return <Canvas containerRef={containerRef} />;
};
