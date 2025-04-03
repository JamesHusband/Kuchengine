import { ScreenProvider } from '../../../core';
import { GameProvider } from '../../../core/game/providers';
import { Layout } from '../../../gui/layout';

export const AppShell = () => {
  return (
    <GameProvider>
      <Layout>
        <ScreenProvider />
      </Layout>
    </GameProvider>
  );
};
