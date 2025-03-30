import { Button } from '../../elements/Button/Button';
import { goToScene } from '../../../systems/scene';

export const HUD = () => {
  return (
    <div className="p-2 flex items-center justify-end w-full">
      <Button onClick={() => goToScene('MainMenu')}>Return to Menu</Button>
    </div>
  );
};
