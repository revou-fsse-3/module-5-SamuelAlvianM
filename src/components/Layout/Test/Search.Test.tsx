import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Search from '../Search';
import useSearch from '@/features/hooks/useSearch';

test('Search component renders correctly', () => {
    render(<Search />);
    const searchInput = screen.getByPlaceholderText('search city here');
    expect(searchInput).toBeDefined();
});

jest.mock('@/features/hooks/useSearch');

test('Search function is called correctly on input change', async () => {

    const mockOnSearchCity = jest.fn();

    (useSearch as jest.Mock).mockReturnValue({ onSearchCity: mockOnSearchCity });
    render(<Search />);

    const searchInput = screen.getByPlaceholderText('search city here');
    fireEvent.change(searchInput, { target: { value: 'New York' } });
    await waitFor(() => expect(mockOnSearchCity).toHaveBeenCalledWith('New York'));
});