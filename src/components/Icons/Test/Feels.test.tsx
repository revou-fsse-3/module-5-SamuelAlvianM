import React from 'react';
import { render } from '@testing-library/react';
import Feels from '../Feels';

test('Feels component snapshot', () => {
  const { asFragment } = render(<Feels />);
  expect(asFragment()).toMatchSnapshot();
});

test('Visibility component has the correct link attribute', () => {
    const { container } = render(<Feels />);
    const svgElement = container.firstChild as HTMLElement;

    // Check the 'xmlns' attribute
    expect(svgElement.getAttribute('xmlns')).toBe('http://www.w3.org/2000/svg');
});
