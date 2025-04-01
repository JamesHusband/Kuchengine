import { Menu } from '../Menu';
import { VBox } from '../../../components/layout';
import { Button } from '../../elements';
import { sceneController } from '../../../core/controllers';

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
