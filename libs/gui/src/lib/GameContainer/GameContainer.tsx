import { useRef } from 'react';
import { useCanvas } from '@engine/instance';
import { Canvas } from '@kuchen/ui-kit';
import { useGame } from '@engine/instance';

export const GameContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGame(containerRef);
  useCanvas(containerRef);

  return <Canvas containerRef={containerRef} />;
};
