import { Layout } from '@kuchen/ui-kit';
import { ScreenProvider } from '@kuchen/scenes';
import { GameProvider } from '@kuchen/game';

export const AppShell = () => {
  return (
    <GameProvider>
      <Layout data-testid="app-shell">
        <ScreenProvider />
      </Layout>
    </GameProvider>
  );
};
