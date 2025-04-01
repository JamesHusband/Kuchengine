import { createRoot } from 'react-dom/client';
import { GameProvider, Layout, ScreenProvider } from '@kuchen/ui-framework';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');
createRoot(rootElement).render(
  <GameProvider>
    <Layout>
      <ScreenProvider />
    </Layout>
  </GameProvider>,
);
