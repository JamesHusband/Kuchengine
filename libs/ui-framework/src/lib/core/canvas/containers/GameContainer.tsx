import { useRef } from 'react';
import { useGame } from '../../game/hooks/useGame';
import { useCanvas } from '../hooks/useCanvas';
import { Canvas } from '../../../gui/components/elements';

export const GameContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGame(containerRef);
  useCanvas(containerRef);

  return <Canvas containerRef={containerRef} />;
};
