import { Button } from '../../elements/Button/Button';
import { gameEvents } from '@kuchen/engine';
import { goToScene } from '../../../systems/scene';

export const HUD = () => {
  return (
    <div className="p-2 flex items-center justify-between w-full">
      <Button onClick={() => gameEvents.emit('game-paused', undefined)}>Pause</Button>
      <Button onClick={() => goToScene('MainMenuScene')}>Return to Menu</Button>
    </div>
  );
};
