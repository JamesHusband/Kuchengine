import { GameProvider, ScreenProvider } from '../../core/providers';
import { Layout } from '../layout';

export const AppShell = () => (
  <GameProvider>
    <Layout>
      <ScreenProvider />
    </Layout>
  </GameProvider>
);
