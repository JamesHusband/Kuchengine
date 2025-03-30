import { Menu } from '../Menu';
import { VBox } from '../../../layout/VBox';
import { Button } from '../../../elements/Button';
import { gameEvents } from '@kuchen/engine';
import { goToScene } from '../../../../systems/scene';

export const PauseMenu = () => {
  return (
    <Menu title="Game Paused">
      <VBox>
        <Button onClick={() => gameEvents.emit('game-resumed', undefined)}>Resume</Button>
        <Button onClick={() => goToScene('MainMenuScene')}>Return to Menu</Button>
      </VBox>
    </Menu>
  );
};
