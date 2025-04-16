import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { GameCanvas } from './';
import React from 'react';

describe('GameCanvas', () => {
  const gameRef = React.createRef<HTMLDivElement>();

  it('renders without crashing', () => {
    render(<GameCanvas gameRef={gameRef} />);
    expect(gameRef.current).toBeInTheDocument();
  });

  it('applies the correct classes', () => {
    render(<GameCanvas gameRef={gameRef} />);
    expect(gameRef.current).toHaveClass('w-full h-full');
  });

  it('assigns the ref correctly', () => {
    render(<GameCanvas gameRef={gameRef} />);
    expect(gameRef.current).toBeInstanceOf(HTMLDivElement);
  });
});
