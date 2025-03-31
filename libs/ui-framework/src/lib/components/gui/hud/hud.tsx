import { Button } from '../../elements/Button/Button';
import { sceneSystem } from '../../../systems/scene';

export const HUD = () => {
  return (
    <div className="p-2 flex items-center justify-between w-full">
      <Button onClick={sceneSystem.pauseGame}>Pause</Button>
      <Button onClick={sceneSystem.goToMainMenu}>Return to Menu</Button>
    </div>
  );
};
