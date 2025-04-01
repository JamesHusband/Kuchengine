import { MainMenu } from '../gui/menus/MainMenu/MainMenu';
import { PauseMenu } from '../gui/menus/PauseMenu/PauseMenu';
import { HUD } from '../gui/hud/hud';

interface GuiRendererProps {
  currentScene: string;
  isPaused: boolean;
}

export const GuiRenderer = ({ currentScene, isPaused }: GuiRendererProps) => {
  // If paused, show pause menu
  if (isPaused) {
    return <PauseMenu />;
  }

  // Show appropriate UI based on scene
  switch (currentScene) {
    case 'MainMenuScene':
      return <MainMenu />;
    case 'GameScene':
      return <HUD />;
    default:
      return null;
  }
};
