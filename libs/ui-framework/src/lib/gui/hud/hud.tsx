import { Button } from '../components/elements';
import { sceneController } from '../../core/controllers';

export const HUD = () => {
  return (
    <div className="p-2 flex items-center justify-between w-full">
      <Button onClick={sceneController.pauseGame}>Pause</Button>
      <Button onClick={sceneController.goToMainMenu}>Return to Menu</Button>
    </div>
  );
};
