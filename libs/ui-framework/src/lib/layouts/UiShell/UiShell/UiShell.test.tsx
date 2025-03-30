import { screen } from '@testing-library/react';
import { UiShell } from './';
import { renderWithMocks } from '../../test-utils';

jest.mock('../../components', () => ({
  GameCanvas: () => <div data-testid="game-canvas" />,
}));

jest.mock('../../layouts/ScreenLayout', () => ({
  ScreenLayout: ({ children }: { children: React.ReactNode }) => <div data-testid="screen-layout">{children}</div>,
}));

describe('UiShell', () => {
  beforeEach(() => {
    renderWithMocks(<UiShell />);
  });

  it('should render without crashing', () => {
    expect(screen.getByTestId('screen-layout')).toBeInTheDocument();
  });

  it('should render game canvas inside screen layout', () => {
    const screenLayout = screen.getByTestId('screen-layout');
    expect(screenLayout).toContainElement(screen.getByTestId('game-canvas'));
  });

  it('should render game canvas', () => {
    expect(screen.getByTestId('game-canvas')).toBeInTheDocument();
  });

  it('should have correct component structure', () => {
    const screenLayout = screen.getByTestId('screen-layout');
    const gameCanvas = screen.getByTestId('game-canvas');

    expect(screenLayout).toBeInTheDocument();
    expect(gameCanvas).toBeInTheDocument();
    expect(screenLayout).toContainElement(gameCanvas);
  });
});
