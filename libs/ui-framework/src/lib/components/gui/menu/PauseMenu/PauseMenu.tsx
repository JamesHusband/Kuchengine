import { Menu } from '../Menu';
import { VBox } from '../../../layout/VBox';
import { Button } from '../../../elements/Button';
import { sceneController } from '../../../../core/controllers';

export const PauseMenu = () => {
  return (
    <Menu title="Game Paused">
      <VBox>
        <Button onClick={sceneController.resumeGame}>Resume</Button>
        <Button onClick={sceneController.goToGame}>Return to Menu</Button>
      </VBox>
    </Menu>
  );
};
