import React from 'react';
import { render } from '@testing-library/react';
import Degree from '../Degree';

test('Degree component renders correctly', () => {
  const { getByTestId } = render(<Degree temp={25} />);
  const degreeElement = getByTestId('degree');
  expect(degreeElement).toMatchSnapshot();
});