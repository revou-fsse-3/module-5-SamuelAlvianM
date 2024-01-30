import React from 'react';
import { render } from '@testing-library/react';
import Wind from '../Wind';

test('Humidity component renders correctly', () => {
    const { container } = render(<Wind />);
    expect(container).toMatchSnapshot();
});

test('Visibility component has the correct link attribute', () => {
    const { container } = render(<Wind />);
    const svgElement = container.firstChild as HTMLElement;

    // Check the 'xmlns' attribute
    expect(svgElement.getAttribute('xmlns')).toBe('http://www.w3.org/2000/svg');
});