import { Menu } from '../Menu';
import { VBox } from '../../../layout/VBox';
import { Button } from '../../../elements/Button';
import { sceneSystem } from '../../../../systems';

export const MainMenu = () => {
  return (
    <Menu title="Kuchen">
      <VBox>
        <Button label="Start Game" onClick={sceneSystem.goToGame} />
      </VBox>
    </Menu>
  );
};
