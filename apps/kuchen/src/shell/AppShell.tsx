import { Layout } from '@kuchen/ui-kit';
import { GameProvider, ScreenProvider } from '@kuchen/ui-framework';

export const AppShell = () => {
  return (
    <GameProvider>
      <Layout data-testid="app-shell">
        <ScreenProvider />
      </Layout>
    </GameProvider>
  );
};
