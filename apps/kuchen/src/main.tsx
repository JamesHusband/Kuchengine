import { createRoot } from 'react-dom/client';
import { useRef } from 'react';
import { GameCanvas, AppLayout, GuiProvider } from '@kuchen/gui';

const AppShell = () => {
  const gameRef = useRef<HTMLDivElement>(null);

  return (
    <AppLayout>
      <GameCanvas gameRef={gameRef} />
      <GuiProvider />
    </AppLayout>
  );
};

const container = document.getElementById('root');
if (!container) throw new Error('Missing #root');
createRoot(container).render(<AppShell />);
