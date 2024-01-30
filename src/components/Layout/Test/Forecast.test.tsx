import React from 'react';
import { render, screen } from '@testing-library/react';
import Forecast from '../Forecast';
import '@testing-library/jest-dom'
import {test, expect, describe} from 'vitest';
import { forecastType, mockData } from '@features/types';
import { prettyDOM } from '@testing-library/dom'

    test('Forecast component renders without errors', () => {
    render(<Forecast data={mockData} />);


    const cityNameElement = screen.getByText('CityName');
    const weatherDescriptionElement = screen.getByText('Clear (Clear sky)');

    expect(cityNameElement).toBeInTheDocument();
    expect(weatherDescriptionElement).toBeInTheDocument();
    });

    test('Forecast component renders multiple forecast items', () => {
        render(<Forecast data={mockData} />);
        const forecastItems = screen.getAllByRole('forecast-item');
        expect(forecastItems).toHaveLength(mockData.list.length);
    });