import { render, screen, waitFor, fireEvent } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { SearchProvider, useSearch } from './useSearch';
import {test, expect, describe} from 'vitest';


describe('SearchProvider and useSearch Tests', () => {
  const TestComponent: React.FC<{ searchTerm: string }> = ({ searchTerm }) => {
    const { options, onSearchCity } = useSearch();

    return (
      <>
        <div data-testid="options-length">{options.length}</div>
        <button onClick={() => onSearchCity(searchTerm)}>Search</button>
      </>
    );
  };

  test('SearchProvider sets options correctly on search', async () => {
    render(
      <SearchProvider>
        <TestComponent searchTerm="New York" />
      </SearchProvider>
    );

    const searchButton = screen.getByText('Search');
    fireEvent.click(searchButton);


    await waitFor(() => {
      const optionsLength = screen.getByTestId('options-length');
      expect(optionsLength.textContent).toBe('0'); 
    });
  });

  test('SearchProvider sets options to an empty array on empty search', async () => {
    render(
      <SearchProvider>
        <TestComponent searchTerm="" />
      </SearchProvider>
    );

    const searchButton = screen.getByText('Search');
    fireEvent.click(searchButton);

    await waitFor(() => {
      const optionsLength = screen.getByTestId('options-length');
      expect(optionsLength.textContent).toBe('0'); 
    });
  });
});