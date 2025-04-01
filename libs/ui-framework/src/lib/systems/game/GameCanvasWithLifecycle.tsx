import { useRef } from 'react';
import { Canvas } from '../../components/elements';
import { useCanvas } from '../../core/hooks';
import { useGame } from '../../core/hooks/useGame/useGame';

export const GameCanvasWithLifecycle = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGame(containerRef);
  useCanvas(containerRef);

  return <Canvas containerRef={containerRef} />;
};
