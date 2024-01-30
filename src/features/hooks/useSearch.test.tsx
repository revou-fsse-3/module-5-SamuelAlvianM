import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchProvider, useSearch } from './useSearch';

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
    userEvent.click(searchButton);

    // Wait for the fetch operation to complete
    await waitFor(() => {
      const optionsLength = screen.getByTestId('options-length');
      expect(optionsLength.textContent).toBe('5'); // Assuming you expect 5 options based on the fetch URL in _getSearchOptions
    });
  });

  test('SearchProvider sets options to an empty array on empty search', async () => {
    render(
      <SearchProvider>
        <TestComponent searchTerm="" />
      </SearchProvider>
    );

    const searchButton = screen.getByText('Search');
    userEvent.click(searchButton);

    // Wait for the fetch operation to complete
    await waitFor(() => {
      const optionsLength = screen.getByTestId('options-length');
      expect(optionsLength.textContent).toBe('0'); // Assuming an empty array is expected on empty search
    });
  });
});