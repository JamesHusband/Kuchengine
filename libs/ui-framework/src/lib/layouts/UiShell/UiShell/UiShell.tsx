import { GameCanvas } from '../../../components';
import { ScreenLayout } from '../../ScreenLayout';

export const UiShell = () => {
  return (
    <ScreenLayout>
      <GameCanvas />
    </ScreenLayout>
  );
};
