import { useRef } from 'react';
import { AppLayout } from '../layouts';
import { GuiProvider } from '../providers';
import { GameCanvas } from '../components';

export const AppShell = () => {
  const gameRef = useRef<HTMLDivElement>(null);

  return (
    <AppLayout>
      <GameCanvas gameRef={gameRef} />
      <GuiProvider />
    </AppLayout>
  );
};
