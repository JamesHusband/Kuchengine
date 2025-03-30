import { Menu } from '../Menu';
import { VBox } from '../../../layout/VBox';
import { Button } from '../../../elements/Button';
import { gameEvents } from '@kuchen/engine';

export const MainMenu = () => {
  return (
    <Menu title="Kuchen">
      <VBox>
        <Button label="Start Game" onClick={() => gameEvents.emit('scene-change', 'GameScene')} />
      </VBox>
    </Menu>
  );
};
