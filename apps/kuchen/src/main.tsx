import { createRoot } from 'react-dom/client';
import { GameProvider, GameWrapper, ScreenProvider } from '@kuchen/ui-framework';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');
createRoot(rootElement).render(
  <GameProvider>
    <GameWrapper>
      <ScreenProvider />
    </GameWrapper>
  </GameProvider>,
);
