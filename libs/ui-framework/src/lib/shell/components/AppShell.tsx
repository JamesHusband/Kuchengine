import { GameProvider, ScreenProvider } from '@kuchen/ui-framework';
import { Layout } from '../layout';

export const AppShell = () => (
  <GameProvider>
    <Layout>
      <ScreenProvider />
    </Layout>
  </GameProvider>
);
