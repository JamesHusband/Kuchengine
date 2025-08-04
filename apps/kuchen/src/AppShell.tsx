import { useRef } from 'react';
import { GameCanvas, AppLayout, GuiProvider } from '@kuchen/gui';

export const AppShell = () => {
  const gameRef = useRef<HTMLDivElement>(null);

  return (
    <AppLayout>
      <GameCanvas gameRef={gameRef} />
      <GuiProvider />
    </AppLayout>
  );
};
