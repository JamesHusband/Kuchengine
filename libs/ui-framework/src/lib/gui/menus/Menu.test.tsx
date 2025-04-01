import { render, screen } from '@testing-library/react';
import { Menu } from './Menu';

describe('Menu', () => {
  it('should render children within menu container', () => {
    render(
      <Menu>
        <div data-testid="test-child">Test Content</div>
      </Menu>,
    );

    const child = screen.getByTestId('test-child');
    expect(child).toBeInTheDocument();
    expect(child).toHaveTextContent('Test Content');
  });

  it('should render title when provided', () => {
    render(
      <Menu title="Test Menu">
        <div>Content</div>
      </Menu>,
    );

    const title = screen.getByText('Test Menu');
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe('H2');
    expect(title).toHaveClass('text-2xl', 'mb-4', 'text-center');
  });

  it('should not render title when not provided', () => {
    render(
      <Menu>
        <div>Content</div>
      </Menu>,
    );

    const title = screen.queryByRole('heading');
    expect(title).not.toBeInTheDocument();
  });

  it('should apply custom className when provided', () => {
    render(
      <Menu className="custom-class">
        <div>Content</div>
      </Menu>,
    );

    const menuInner = screen.getByText('Content').closest('div[class*="bg-[#8B4513]"]');
    expect(menuInner).toHaveClass('custom-class');
  });

  it('should render with correct layout structure', () => {
    render(
      <Menu>
        <div>Content</div>
      </Menu>,
    );

    const wrapper = screen.getByText('Content').closest('div[class*="fixed"]');
    expect(wrapper).toHaveClass('fixed', 'inset-0', 'z-50', 'flex', 'items-center', 'justify-center');

    const container = screen.getByText('Content').closest('div[class*="bg-[#8B4513]"]');
    expect(container).toHaveClass('p-6', 'bg-[#8B4513]', 'border-4', 'border-[#DAA520]', 'rounded-lg', 'min-w-[240px]');
  });
});
