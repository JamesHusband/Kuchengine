import { render } from '@testing-library/react';

import Gui from './gui';

describe('Gui', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Gui />);
    expect(baseElement).toBeTruthy();
  });
});
