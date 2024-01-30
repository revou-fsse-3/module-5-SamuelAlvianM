import React from 'react';
import { render, screen } from '@testing-library/react';
import Suggestions from '../Suggestion';
import { test, expect, describe, vi} from 'vitest';

test('Suggestions component renders without errors', () => {
  render(<Suggestions />);
  const suggestionsElement = screen.getByRole('suggestions-container');
  expect(suggestionsElement).toBeDefined();
});

vi.mock('@/features/hooks/useSearch', () => ({
    useSearch: vi.fn().mockReturnValue({ options: [{ name: 'New York' }, { name: 'San Francisco' }] }),
  }));
  
  // Mock the useRouter hook
  vi.mock('next/router', () => ({
    useRouter: () => ({ push: vi.fn() }),
  }));
  
  test('Suggestions component renders city options when options are provided', () => {
    render(<Suggestions />);
    const cityOptions = screen.getAllByRole('city-option');
    expect(cityOptions).toHaveLength(2);
    expect(cityOptions[0].textContent).toBe('New York, ');
    expect(cityOptions[1].textContent).toBe('San Francisco, ');
  });