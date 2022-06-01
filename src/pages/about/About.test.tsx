import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';

test('render Cards', () => {
  const { container } = render(<About />);
  expect(container.firstChild).toHaveClass('about-wrapper');
  expect(screen.getByText(/About us/i)).toBeInTheDocument();
});
