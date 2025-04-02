import { ScreenProvider } from '../../../core';
import { GameProvider } from '../../../core/game/providers';
import { Layout } from '../../../gui/layouts';

export const AppShell = () => (
  <GameProvider>
    <Layout>
      <ScreenProvider />
    </Layout>
  </GameProvider>
);
