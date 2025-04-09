import { Button } from '@kuchen/ui-kit';
import { sceneController } from '@engine/scenes';

export const HUD = () => {
  return (
    <div className="p-2 flex items-center justify-between w-full">
      <Button onClick={sceneController.pauseGame}>Pause</Button>
      <Button onClick={sceneController.goToMainMenu}>Return to Menu</Button>
    </div>
  );
};
