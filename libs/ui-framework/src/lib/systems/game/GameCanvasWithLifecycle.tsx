import { useRef } from 'react';
import { Canvas } from '../../components/elements';
import { useCanvas } from '../../hooks';
import { usePhaserGame } from '../../hooks/useGame/useGame';

export const GameCanvasWithLifecycle = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  usePhaserGame(containerRef);
  useCanvas(containerRef);

  return <Canvas containerRef={containerRef} />;
};
