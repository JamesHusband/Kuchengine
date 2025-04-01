import { render, screen } from '@testing-library/react';
import { useContext } from 'react';
import { ScreenContext } from './ScreenProvider';
import { ScreenContextType } from '../types';

// Mock child component that consumes the context
const TestComponent = () => {
  const context = useContext(ScreenContext);
  return <div data-testid="test-component">{context ? context.currentScene : 'No context'}</div>;
};

describe('ScreenContext', () => {
  it('should create context with undefined default value', () => {
    render(<TestComponent />);
    expect(screen.getByTestId('test-component')).toHaveTextContent('No context');
  });

  it('should provide context value to children', () => {
    const mockContextValue: ScreenContextType = {
      currentScene: 'test-scene',
    };

    render(
      <ScreenContext.Provider value={mockContextValue}>
        <TestComponent />
      </ScreenContext.Provider>,
    );

    expect(screen.getByTestId('test-component')).toHaveTextContent('test-scene');
  });
});
