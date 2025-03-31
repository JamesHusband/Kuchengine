import { render, screen } from '@testing-library/react';
import { ScreenProvider } from './ScreenProvider';
import * as hooks from '../../hooks';
import * as pauseHooks from '../../hooks/usePauseState';

jest.mock('@kuchen/engine', () => ({
  gameEvents: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  createGame: jest.fn(),
}));

jest.mock('../../components', () => ({
  GameCanvas: () => <div data-testid="game-canvas" />,
  MainMenu: () => <div role="banner">Main Menu</div>,
  HUD: () => <div role="status">HUD</div>,
  PauseMenu: () => <div role="dialog">Pause Menu</div>,
}));

jest.mock('../../systems/game/GameCanvasWithLifecycle', () => ({
  GameCanvasWithLifecycle: () => <div data-testid="game-canvas" />,
}));

jest.mock('../../hooks');
jest.mock('../../hooks/usePauseState');

const mockUseGameState = hooks.useGameState as jest.Mock;
const mockUsePauseState = pauseHooks.usePauseState as jest.Mock;

describe('ScreenProvider', () => {
  beforeEach(() => {
    mockUseGameState.mockReturnValue({ currentScene: 'MainMenuScene' });
    mockUsePauseState.mockReturnValue({ isPaused: false });
  });

  it('should render MainMenu when scene is MainMenuScene', () => {
    render(<ScreenProvider />);
    expect(screen.getByText('Main Menu')).toBeInTheDocument();
  });

  it('should render HUD when scene is GameScene', () => {
    mockUseGameState.mockReturnValue({ currentScene: 'GameScene' });
    render(<ScreenProvider />);
    expect(screen.getByText('HUD')).toBeInTheDocument();
  });

  it('should render PauseMenu when game is paused', () => {
    mockUseGameState.mockReturnValue({ currentScene: 'GameScene' });
    mockUsePauseState.mockReturnValue({ isPaused: true });
    render(<ScreenProvider />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Pause Menu')).toBeInTheDocument();
  });
});
