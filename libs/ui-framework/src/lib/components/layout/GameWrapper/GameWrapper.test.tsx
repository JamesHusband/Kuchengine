import { render, screen } from '@testing-library/react';
import { GameWrapper } from './GameWrapper';

describe('GameWrapper', () => {
  it('should render children within game container', () => {
    render(
      <GameWrapper>
        <div data-testid="test-child">Test Content</div>
      </GameWrapper>,
    );

    const child = screen.getByTestId('test-child');
    const container = child.parentElement;
    expect(container).toHaveClass('w-[1024px]', 'h-[768px]', 'bg-gray-900');
    expect(child).toBeInTheDocument();
    expect(child).toHaveTextContent('Test Content');
  });

  it('should render with correct viewport wrapper styles', () => {
    render(
      <GameWrapper>
        <div>Content</div>
      </GameWrapper>,
    );

    const viewport = screen.getByText('Content').parentElement?.parentElement;
    expect(viewport).toHaveClass('min-h-screen', 'w-full', 'bg-black', 'flex', 'items-center', 'justify-center');
  });

  it('should maintain game container dimensions', () => {
    render(
      <GameWrapper>
        <div>Content</div>
      </GameWrapper>,
    );

    const gameContainer = screen.getByText('Content').parentElement;
    expect(gameContainer).toHaveClass('w-[1024px]', 'h-[768px]');
  });
});
