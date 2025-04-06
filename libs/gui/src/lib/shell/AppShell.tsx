import { Layout } from '@kuchen/ui-kit';
import { ScreenProvider } from '../ScreenProvider';
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
