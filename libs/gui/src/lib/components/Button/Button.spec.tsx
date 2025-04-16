import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './';

const noop = (): void => undefined;

describe('Button', () => {
  it('renders without crashing', () => {
    render(<Button onClick={noop}>Test Button</Button>);
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    const buttonText = 'Click Me';
    render(<Button onClick={noop}>{buttonText}</Button>);
    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });

  it('applies the correct classes', () => {
    render(<Button onClick={noop}>Test</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'text-white',
      'bg-gray-700',
      'border-none',
      'px-4',
      'py-2',
      'mr-2',
      'cursor-pointer',
      'hover:bg-gray-600',
      'transition-colors',
    );
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Test</Button>);

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
