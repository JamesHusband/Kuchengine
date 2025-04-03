import { render } from '@testing-library/react';
import { VBox } from './VBox';

describe('VBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <VBox>
        <div>Test content</div>
      </VBox>,
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render children correctly', () => {
    const testId = 'test-child';
    const { getByTestId } = render(
      <VBox>
        <div data-testid={testId}>Child content</div>
      </VBox>,
    );
    expect(getByTestId(testId)).toBeInTheDocument();
    expect(getByTestId(testId)).toHaveTextContent('Child content');
  });

  it('should apply default flex column styles', () => {
    const { container } = render(
      <VBox>
        <div>Content</div>
      </VBox>,
    );
    const vboxElement = container.firstChild as HTMLElement;
    expect(vboxElement).toHaveClass('flex', 'flex-col', 'gap-4');
  });

  it('should merge custom className with default styles', () => {
    const customClass = 'custom-class';
    const { container } = render(
      <VBox className={customClass}>
        <div>Content</div>
      </VBox>,
    );
    const vboxElement = container.firstChild as HTMLElement;
    expect(vboxElement).toHaveClass('flex', 'flex-col', 'gap-4', customClass);
  });
});
