import React from 'react';
import { render } from '@testing-library/react';
import Pop from '../Pop';

test('Humidity component renders correctly', () => {
  const { container } = render(<Pop />);
  expect(container).toMatchSnapshot();
});

test('Visibility component has the correct link attribute', () => {
    const { container } = render(<Pop />);
    const svgElement = container.firstChild as HTMLElement;

    // Check the 'xmlns' attribute
    expect(svgElement.getAttribute('xmlns')).toBe('http://www.w3.org/2000/svg');
});