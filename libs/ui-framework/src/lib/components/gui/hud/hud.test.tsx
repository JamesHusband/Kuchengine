import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HUD } from './Hud';
import { gameEvents } from '@kuchen/engine';
import { renderWithMocks } from '../../../test-utils';

jest.mock('@kuchen/engine', () => ({
  gameEvents: {
    emit: jest.fn(),
  },
}));

describe('HUD', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    renderWithMocks(<HUD />);
  });

  it('should render both buttons', () => {
    expect(screen.getByText('Return to Menu')).toBeInTheDocument();
    expect(screen.getByText('Pause')).toBeInTheDocument();
  });

  it('should emit scene change event when clicking return button', async () => {
    const button = screen.getByText('Return to Menu');
    await userEvent.click(button);
    expect(gameEvents.emit).toHaveBeenCalledWith('scene-change', 'MainMenuScene');
  });

  it('should emit game-paused event when clicking pause button', async () => {
    const button = screen.getByText('Pause');
    await userEvent.click(button);
    expect(gameEvents.emit).toHaveBeenCalledWith('game-paused');
  });

  it('should layout buttons correctly', () => {
    const container = screen.getByText('Pause').closest('div');
    expect(container).toHaveClass('flex', 'items-center', 'justify-between', 'w-full');
  });
});
