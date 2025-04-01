import { Menu } from '../Menu';
import { Button } from '../../components/elements';
import { sceneController } from '../../../core/controllers';

export const PauseMenu = () => {
  return (
    <Menu title="Paused">
      <Button onClick={sceneController.resumeGame}>Play</Button>
      <Button onClick={sceneController.restartGame}>Restart</Button>
      <Button onClick={sceneController.openOptions}>Options</Button>
      <Button onClick={sceneController.goToMainMenu}>Quit</Button>
    </Menu>
  );
};
