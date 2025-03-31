import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './';

describe('Button', () => {
  const mockOnClick = jest.fn();

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  it('should render button with correct text', () => {
    render(<Button onClick={mockOnClick}>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('should call onClick handler when clicked', () => {
    render(<Button onClick={mockOnClick}>Click me</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('should render with correct styling classes', () => {
    render(<Button onClick={mockOnClick}>Click me</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('px-6', 'py-2', 'bg-blue-600', 'hover:bg-blue-700', 'text-white', 'rounded', 'shadow');
  });

  it('should render children correctly', () => {
    render(
      <Button onClick={mockOnClick}>
        <span>Custom</span> Content
      </Button>,
    );
    expect(screen.getByRole('button')).toHaveTextContent('Custom Content');
  });
});
