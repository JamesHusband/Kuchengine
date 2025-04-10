import { render } from '@testing-library/react';

import UI from './UI';

describe('UI', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UI />);
    expect(baseElement).toBeTruthy();
  });
});
