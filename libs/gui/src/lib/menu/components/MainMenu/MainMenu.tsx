import { Menu } from '../Menu';
import { Button } from '@kuchen/ui-kit';
import { sceneController } from '@kuchen/scenes';

export const MainMenu = () => {
  return (
    <Menu title="Kuchen">
      <Button onClick={sceneController.goToGame}>Start Game</Button>
    </Menu>
  );
};
