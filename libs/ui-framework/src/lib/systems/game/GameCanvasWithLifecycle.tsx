import { useRef } from 'react';
import { usePhaserGame } from '../../hooks';
import { Canvas } from '../../components/elements';

export const GameCanvasWithLifecycle = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  usePhaserGame(containerRef);
  return <Canvas containerRef={containerRef} />;
};
