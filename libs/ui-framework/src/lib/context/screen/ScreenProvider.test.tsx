import { render, screen } from '@testing-library/react';
import { ScreenProvider } from './ScreenProvider';

jest.mock('@kuchen/engine', () => ({
  gameEvents: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
}));

jest.mock('../../components', () => ({
  GameCanvas: () => <div data-testid="game-canvas" />,
  MainMenu: () => <div role="banner">Main Menu</div>,
  HUD: () => <div role="status">HUD</div>,
}));

const mockUseGame = jest.fn();

jest.mock('../game/GameProvider', () => ({
  useGame: () => mockUseGame(),
}));

const renderWithProviders = (ui: React.ReactElement) => {
  return render(<ScreenProvider>{ui}</ScreenProvider>);
};

describe('ScreenProvider', () => {
  beforeEach(() => {
    mockUseGame.mockReset();
  });

  it('should render children', () => {
    mockUseGame.mockReturnValue({ currentScene: 'MainMenuScene' });
    renderWithProviders(<div data-testid="test-child">Test Content</div>);
    expect(screen.getByTestId('test-child')).toBeInTheDocument();
  });

  it('should render MainMenu when currentScene is MainMenuScene', () => {
    mockUseGame.mockReturnValue({ currentScene: 'MainMenuScene' });
    renderWithProviders(<div>Test Content</div>);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('should render HUD when currentScene is GameScene', () => {
    mockUseGame.mockReturnValue({ currentScene: 'GameScene' });
    renderWithProviders(<div>Test Content</div>);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });
});
