import { screen } from '@testing-library/react';
import { ScreenLayout } from './';
import { renderWithMocks } from '../../test-utils';

describe('ScreenLayout', () => {
  const mockChildren = <div data-testid="mock-child">Test Content</div>;

  beforeEach(() => {
    renderWithMocks(<ScreenLayout>{mockChildren}</ScreenLayout>);
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
    expect(layout).toHaveClass('flex', 'items-center', 'justify-center', 'min-h-screen');
  });

  it('should have correct container styles', () => {
    const container = screen.getByTestId('game-container');
    expect(container).toHaveClass('w-[800px]', 'h-[600px]');
  });
});
