import {
    getWindDirection,
    getHumidityValue,
    getVisibilityValue,
    getSunTime,
    getPop,
} from '.'; 

describe('Utility Functions Tests', () => {
    describe('getWindDirection', () => {
    test('returns "NE" for degrees between 15 and 75', () => {
        expect(getWindDirection(45)).toBe('NE');
        expect(getWindDirection(60)).toBe('NE');
    });
});

    describe('getHumidityValue', () => {
    test('returns "Dry and comfortable" for humidity level <= 55', () => {
        expect(getHumidityValue(50)).toBe('Dry and comfortable');
        expect(getHumidityValue(55)).toBe('Dry and comfortable');
    });
});

    describe('getVisibilityValue', () => {
    test('returns "Dangerously foggy" for visibility <= 50', () => {
        expect(getVisibilityValue(40)).toBe('Dangerously foggy');
        expect(getVisibilityValue(50)).toBe('Dangerously foggy');
    });
});

    describe('getSunTime', () => {
    test('returns formatted time string', () => {

        const timestamp = 1644168000; 
        expect(getSunTime(timestamp)).toBe('12:30');
    });
    });

    describe('getPop', () => {
    test('returns "Low probability" for pop <= 0.33', () => {
        expect(getPop(0.25)).toBe('Low probability');
        expect(getPop(0.33)).toBe('Low probability');
    });
    });
});
