import { render, screen } from '@testing-library/react';
import { GameProvider } from '../../providers';
import { useGameState } from '../../state/useGameState';

jest.mock('phaser', () => ({
  Game: jest.fn(),
  Scene: jest.fn(),
  AUTO: 'AUTO',
  Events: {
    EventEmitter: class MockEventEmitter {
      on = jest.fn();
      off = jest.fn();
      emit = jest.fn();
      removeAllListeners = jest.fn();
    },
  },
}));

// Mock the useGameState hook
jest.mock('../../state/useGameState', () => ({
  useGameState: jest.fn().mockReturnValue({
    currentScene: 'MainMenuScene',
  }),
}));

const TestComponent = () => {
  const { currentScene } = useGameState();
  return <div data-testid="current-scene">{currentScene}</div>;
};

describe('GameProvider', () => {
  it('should provide game context to children', () => {
    render(
      <GameProvider>
        <TestComponent />
      </GameProvider>,
    );

    expect(screen.getByTestId('current-scene')).toHaveTextContent('MainMenuScene');
  });
});
