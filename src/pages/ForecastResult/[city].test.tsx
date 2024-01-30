import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import City, { getServerSideProps } from './[city]'; 

describe('City Page Tests', () => {

const mockForecastData = {
name: 'Mock City',
country: 'MO',
list: [
    {
    dt: 1644168000,
    main: {
        temp: 25,
        temp_max: 30,
        temp_min: 20,
        feels_like: 26,
        humidity: 50,
    },
    weather: [
        {
        main: 'Clear',
        description: 'Clear sky',
        icon: '01d',
        },
    ],
    wind: {
        deg: 180,
        speed: 5,
    },
    visibility: 10,
    pressure: 1010,
    pop: 20,
    },

    ],
};


test('renders City page with forecast data', async () => {
    const mockContext = { query: { lat: 'mockLat', lon: 'mockLon' } };


    global.fetch = jest.fn().mockImplementation(mockFetchSuccess);

    let pageProps!: any;
    await act(async () => {
    const result = await getServerSideProps(mockContext);
    pageProps = result.props;
    });

    render(<City {...pageProps!} />);

    expect(screen.getByText('ForecastDisplay Component')).toBeInTheDocument();


    expect(screen.getByText(pageProps!.forecast.name)).toBeInTheDocument();
    expect(screen.getByText(pageProps!.forecast.country)).toBeInTheDocument();


    expect(screen.getByText(`${Math.round(pageProps!.forecast.list[0].main.temp)}°C`)).toBeInTheDocument();
    expect(screen.getByText('Clear sky')).toBeInTheDocument();

    global.fetch.mockRestore();
});


test('throws an error if fetching forecast data fails', async () => {
    const mockContext = { query: { lat: 'mockLat', lon: 'mockLon' } };


    global.fetch = jest.fn().mockImplementation(mockFetchError);

    await expect(getServerSideProps(mockContext)).rejects.toThrow('failed to fetch all data');

    global.fetch.mockRestore();
});
    test('renders ForecastDisplay component with received forecast data', () => {
        render(<City forecast={mockForecastData} />);
        expect(screen.getByText('ForecastDisplay Component')).toBeInTheDocument();
        expect(screen.getByText(mockForecastData.name)).toBeInTheDocument();
        expect(screen.getByText(mockForecastData.country)).toBeInTheDocument();
        expect(screen.getByText(`${Math.round(mockForecastData.list[0].main.temp)}°C`)).toBeInTheDocument();
        expect(screen.getByText('Clear sky')).toBeInTheDocument();

    });
});

function mockFetchSuccess(..._args: any) {
    throw new Error('Function not implemented.');
}


function mockFetchError(..._args: any) {
    throw new Error('Function not implemented.');
}
