import { Menu } from '../Menu';
import { VBox, Button } from '../../elements';
import { sceneController } from '../../../core/controllers';

export const MainMenu = () => {
  return (
    <Menu title="Kuchen">
      <VBox>
        <Button label="Start Game" onClick={sceneController.goToGame} />
      </VBox>
    </Menu>
  );
};
