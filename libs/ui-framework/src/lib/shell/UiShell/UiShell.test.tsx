import { screen } from '@testing-library/react';
import { UiShell } from './';
import { renderWithMocks } from '../../test-utils';

jest.mock('../../components', () => ({
  GameCanvas: () => <div data-testid="game-canvas" />,
}));

describe('UiShell', () => {
  beforeEach(() => {
    renderWithMocks(<UiShell />);
  });

  it('should render without crashing', () => {
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('should render welcome heading', () => {
    expect(screen.getByText('Welcome')).toBeInTheDocument();
  });

  it('should render GameCanvas', () => {
    expect(screen.getByTestId('game-canvas')).toBeInTheDocument();
  });

  it('should have correct heading styles', () => {
    const heading = screen.getByRole('heading');
    expect(heading).toHaveClass('text-4xl', 'font-bold', 'text-center', 'text-gray-800', 'mb-8');
  });
});
