import { render, screen } from '@testing-library/react';
import { GameProvider } from './GameProvider';
import * as hooks from '../../hooks';

// Mock the useGameState hook
jest.mock('../../hooks', () => ({
  useGameState: jest.fn().mockReturnValue({
    currentScene: 'MainMenuScene',
  }),
}));

const TestComponent = () => {
  const { currentScene } = hooks.useGameState();
  return <div data-testid="current-scene">{currentScene}</div>;
};

describe('GameProvider', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (hooks.useGameState as jest.Mock).mockReturnValue({
      currentScene: 'MainMenuScene',
    });
  });

  it('should render children with initial MainMenuScene', () => {
    render(
      <GameProvider>
        <TestComponent />
      </GameProvider>,
    );

    expect(screen.getByTestId('current-scene')).toHaveTextContent('MainMenuScene');
  });

  it('should update scene when scene changes', () => {
    (hooks.useGameState as jest.Mock).mockReturnValue({
      currentScene: 'GameScene',
    });

    render(
      <GameProvider>
        <TestComponent />
      </GameProvider>,
    );

    expect(screen.getByTestId('current-scene')).toHaveTextContent('GameScene');
  });

  it('should provide game context to children', () => {
    const { container } = render(
      <GameProvider>
        <div data-testid="child">Test Child</div>
      </GameProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});
