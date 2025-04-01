import { GameProvider, ScreenProvider } from '../../../core/providers';
import { Layout } from '../../../gui/layouts';

export const AppShell = () => (
  <GameProvider>
    <Layout>
      <ScreenProvider />
    </Layout>
  </GameProvider>
);
