import { Menu } from '../Menu';
import { VBox } from '../../../layout/VBox';
import { Button } from '../../../elements/Button';
import { sceneSystem } from '../../../../systems';

export const PauseMenu = () => {
  return (
    <Menu title="Game Paused">
      <VBox>
        <Button onClick={sceneSystem.resumeGame}>Resume</Button>
        <Button onClick={sceneSystem.goToGame}>Return to Menu</Button>
      </VBox>
    </Menu>
  );
};
