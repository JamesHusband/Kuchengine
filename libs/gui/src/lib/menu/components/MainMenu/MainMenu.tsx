import { Menu } from '../Menu';
import { Button } from '@kuchen/ui-kit';
import { sceneController } from '@engine/scenes';

export const MainMenu = () => {
  return (
    <Menu title="Kuchen">
      <Button onClick={sceneController.goToGame}>Start Game</Button>
    </Menu>
  );
};
