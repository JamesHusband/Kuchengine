import { useRef } from 'react';
import { Canvas } from '../../gui/components/elements';
import { useCanvas } from '../hooks';
import { useGame } from '../hooks/useGame/useGame';

export const GameContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGame(containerRef);
  useCanvas(containerRef);

  return <Canvas containerRef={containerRef} />;
};
