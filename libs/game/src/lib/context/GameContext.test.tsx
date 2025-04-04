import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useContext } from 'react';
import { GameContext } from './GameContext';
import { GameProvider } from '../providers';

jest.mock('../providers', () => ({
  GameProvider: ({ children }: { children: React.ReactNode }) => <div data-testid="game-provider">{children}</div>,
}));

const TestComponent = () => {
  const context = useContext(GameContext);
  return <div data-testid="test-component">{context ? context.currentScene : 'No context'}</div>;
};

describe('GameContext', () => {
  it('should create context with undefined default value', () => {
    render(<TestComponent />);
    expect(screen.getByTestId('test-component')).toHaveTextContent('No context');
  });

  it('should provide context value to children', () => {
    render(
      <GameProvider>
        <TestComponent />
      </GameProvider>,
    );
    expect(screen.getByTestId('game-provider')).toBeInTheDocument();
  });
});
