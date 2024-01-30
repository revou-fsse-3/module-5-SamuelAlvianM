import React from 'react';
import { render, screen } from '@testing-library/react';
import Degree from '../Degree';
import {test, expect, describe} from 'vitest';


test('Degree component renders correctly', () => {
  const { getByRole} = render(<Degree temp={25} />);
  const degreeElement = screen.getByRole('degree');
  expect(degreeElement).toMatchSnapshot();
});