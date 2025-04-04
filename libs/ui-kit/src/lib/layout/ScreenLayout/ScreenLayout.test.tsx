import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ScreenLayout } from '.';

describe('ScreenLayout', () => {
  const mockChildren = <div data-testid="mock-child">Test Content</div>;

  beforeEach(() => {
    render(<ScreenLayout>{mockChildren}</ScreenLayout>);
  });

  it('should render without crashing', () => {
    expect(screen.getByTestId('screen-layout')).toBeInTheDocument();
  });

  it('should render children inside the layout', () => {
    const layout = screen.getByTestId('screen-layout');
    expect(layout).toContainElement(screen.getByTestId('mock-child'));
  });

  it('should have correct layout styles', () => {
    const layout = screen.getByTestId('screen-layout');
    expect(layout).toHaveClass('w-full', 'h-full', 'bg-gray-900');
  });

  it('should have correct container styles', () => {
    const container = screen.getByTestId('game-container');
    expect(container).toHaveClass('w-full', 'h-full');
  });
});
