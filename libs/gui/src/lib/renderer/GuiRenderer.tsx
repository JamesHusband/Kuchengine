import { PauseMenu, MainMenu } from '../menu';
import { HUD } from '../hud';

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
