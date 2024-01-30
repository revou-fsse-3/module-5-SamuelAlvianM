import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom'
import City, { getServerSideProps } from "./[city]";

describe("City Page - getServerSideProps", () => {
const mockForecast = {
    name: "Mock City",
    country: "MO",
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
            main: "Clear",
            description: "Clear sky",
            icon: "01d",
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

const mockContext = {
    query: { lat: "mockLat", lon: "mockLon" },
    req: {
    headers: {
        "user-agent": "testing-agent",
    },
    cookies: {
        "session-id": "mock-session-id",
    },
    },
    res: {
    status: jest.fn().mockReturnThis(),
    send: jest.fn().mockReturnThis(),
    },
    resolvedUrl: "mockResolvedUrl",
};

it("fetches forecast data successfully", async () => {
    global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: jest.fn().mockResolvedValue(mockForecast),
    });

    await act(async () => {
    const result = await getServerSideProps(mockContext);
    render(<City {...result.props} />);
    });

    // Add your assertions using screen, fireEvent, etc.
    expect(screen.getByText('Mock City')).toBeInTheDocument();

    global.fetch.mockRestore();
  });

  it("throws an error if fetching forecast data fails", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
    });

    await act(async () => {
      await expect(getServerSideProps(mockContext)).rejects.toThrowError(
        "failed to fetch all data"
      );
    });

    // Add your assertions using screen, fireEvent, etc.
    // Example: expect(screen.getByText('Error message')).toBeInTheDocument();

    global.fetch.mockRestore();
  });
});
