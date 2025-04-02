import { Menu } from '../../components/Menu';
import { Button } from '../../components/elements';
import { sceneController } from '../../../core/scene/controllers';

export const MainMenu = () => {
  return (
    <Menu title="Kuchen">
      <Button onClick={sceneController.goToGame}>Start Game</Button>
    </Menu>
  );
};
