import { render, screen, act } from '@testing-library/react';
import { ScreenProvider } from './ScreenProvider';

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

jest.mock('../../hooks/usePauseState', () => ({
  usePauseState: () => false,
}));

const mockUseGame = jest.fn();

jest.mock('../game/GameProvider', () => ({
  useGame: () => mockUseGame(),
}));

const renderWithProviders = async (ui: React.ReactElement) => {
  let result;
  await act(async () => {
    result = render(<ScreenProvider>{ui}</ScreenProvider>);
  });
  return result;
};

describe('ScreenProvider', () => {
  beforeEach(() => {
    mockUseGame.mockReset();
  });

  it('should render children', async () => {
    mockUseGame.mockReturnValue({ currentScene: 'MainMenuScene' });
    await renderWithProviders(<div data-testid="test-child">Test Content</div>);
    expect(screen.getByTestId('test-child')).toBeInTheDocument();
  });

  it('should render MainMenu when currentScene is MainMenuScene', async () => {
    mockUseGame.mockReturnValue({ currentScene: 'MainMenuScene' });
    await renderWithProviders(<div>Test Content</div>);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('should render HUD when currentScene is GameScene', async () => {
    mockUseGame.mockReturnValue({ currentScene: 'GameScene' });
    await renderWithProviders(<div>Test Content</div>);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });
});
