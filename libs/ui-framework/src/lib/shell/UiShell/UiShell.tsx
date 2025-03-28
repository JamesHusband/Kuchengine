import { GameCanvas } from '../../components';
import { ScreenLayout } from '../../layouts/ScreenLayout';

export const UiShell = () => {
  return (
    <ScreenLayout>
      <GameCanvas />
    </ScreenLayout>
  );
};
