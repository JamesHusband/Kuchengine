import { GuiLayout } from '../layouts/GuiLayout';
import { Button } from '../components';
import { eventBus } from '@kuchen/engine';

export const MainMenu = () => {
  return (
    <GuiLayout>
      <Button onClick={() => eventBus.emit('scene-change', 'MainMenu')}>Go to Menu</Button>
      <Button onClick={() => eventBus.emit('scene-change', 'Game')}>Start Game</Button>
    </GuiLayout>
  );
};
