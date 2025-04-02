import { MainMenu } from './menus/MainMenu/MainMenu';
import { PauseMenu } from './menus/PauseMenu/PauseMenu';
import { HUD } from './hud/hud';

interface GuiRendererProps {
  currentScene: string;
  isPaused: boolean;
}

export const GuiRenderer = ({ currentScene, isPaused }: GuiRendererProps) => {
  if (isPaused) {
    return <PauseMenu />;
  }

  switch (currentScene) {
    case 'MainMenuScene':
      return <MainMenu />;
    case 'GameScene':
      return <HUD />;
    default:
      return null;
  }
};
