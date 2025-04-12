import { useRef } from 'react';
import { eventBus } from '@kuchen/engine';
import { GameCanvas, AppLayout, GuiLayout, Button } from '@kuchen/gui';
import { useGameInit } from '../runtime/lib/useGameInit';

export const AppShell = () => {
  const gameRef = useRef<HTMLDivElement>(null);

  useGameInit(gameRef);

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
