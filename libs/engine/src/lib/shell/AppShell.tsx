import { useRef } from 'react';
import { useGameInstance, eventBus } from '@kuchen/engine';
import { GameCanvas, AppLayout, GuiLayout, Button } from '@kuchen/gui';

export const AppShell = () => {
  const gameRef = useRef<HTMLDivElement>(null);

  useGameInstance(gameRef);

  return (
    <AppLayout>
      <GameCanvas gameRef={gameRef} />
      <GuiLayout>
        <Button onClick={() => eventBus.emit('scene-change', 'MainMenu')}>Go to Menu</Button>
        <Button onClick={() => eventBus.emit('scene-change', 'Game')}>Start Game</Button>
      </GuiLayout>
    </AppLayout>
  );
};
