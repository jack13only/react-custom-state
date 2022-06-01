import React from 'react';
import { render } from '@testing-library/react';
import NotFound from './Not-found';

test('render 404', () => {
  const { container } = render(<NotFound />);
  expect(container.firstChild).toHaveClass('error-wrapper');
});
