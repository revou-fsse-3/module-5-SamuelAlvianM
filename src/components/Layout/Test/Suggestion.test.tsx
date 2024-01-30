import React from 'react';
import { render, screen } from '@testing-library/react';
import Suggestions from '../Suggestion';

test('Suggestions component renders without errors', () => {
  render(<Suggestions />);
  const suggestionsElement = screen.getByTestId('suggestions-container');
  expect(suggestionsElement).toBeDefined();
});

jest.mock('@/features/hooks/useSearch', () => ({
    useSearch: jest.fn().mockReturnValue({ options: [{ name: 'New York' }, { name: 'San Francisco' }] }),
  }));
  
  // Mock the useRouter hook
  jest.mock('next/router', () => ({
    useRouter: () => ({ push: jest.fn() }),
  }));
  
  test('Suggestions component renders city options when options are provided', () => {
    render(<Suggestions />);
    const cityOptions = screen.getAllByTestId('city-option');
    expect(cityOptions).toHaveLength(2);
    expect(cityOptions[0].textContent).toBe('New York');
    expect(cityOptions[1].textContent).toBe('San Francisco');
  });