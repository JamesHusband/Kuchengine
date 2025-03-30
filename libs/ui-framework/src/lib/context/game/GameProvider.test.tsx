import { render, screen, act } from '@testing-library/react';
import { GameProvider, useGame } from './GameProvider';
import { gameEvents } from '@kuchen/engine';

jest.mock('@kuchen/engine', () => ({
  gameEvents: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
}));

const TestComponent = () => {
  const { currentScene } = useGame();
  return <div data-testid="current-scene">{currentScene}</div>;
};

describe('GameProvider', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render children with initial MainMenuScene', () => {
    render(
      <GameProvider>
        <TestComponent />
      </GameProvider>,
    );

    expect(screen.getByTestId('current-scene')).toHaveTextContent('MainMenuScene');
  });

  it('should update scene when scene-change event is emitted', () => {
    let sceneChangeHandler: (scene: string) => void;
    (gameEvents.on as jest.Mock).mockImplementation((event, handler) => {
      if (event === 'scene-change') {
        sceneChangeHandler = handler;
      }
    });

    render(
      <GameProvider>
        <TestComponent />
      </GameProvider>,
    );

    act(() => {
      sceneChangeHandler('GameScene');
    });

    expect(screen.getByTestId('current-scene')).toHaveTextContent('GameScene');
  });

  it('should throw error when useGame is used outside GameProvider', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<TestComponent />)).toThrow('useGame must be used within a GameProvider');
    consoleError.mockRestore();
  });

  it('should clean up event listener on unmount', () => {
    const offSpy = jest.spyOn(gameEvents, 'off');
    const { unmount } = render(
      <GameProvider>
        <TestComponent />
      </GameProvider>,
    );

    unmount();
    expect(offSpy).toHaveBeenCalledWith('scene-change', expect.any(Function));
  });
});
