import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-test-renderer';
import useDebounce from './useDebounce'; // Adjust the path based on your actual file structure

describe('useDebounce Hook Tests', () => {
  test('returns the value without delay', () => {
    const { result } = renderHook(() => useDebounce('test', 0));

    expect(result.current).toBe('test');
  });

  test('returns the value after the specified delay', async () => {
    jest.useFakeTimers();

    const { result, rerender } = renderHook((props) => useDebounce(props.value, props.delay), {
      initialProps: { value: 'initial', delay: 500 },
    });

    act(() => {
      jest.advanceTimersByTime(250);
      rerender({ value: 'changed', delay: 500 });
    });

    // Before the delay has passed, it should still return the initial value
    expect(result.current).toBe('initial');

    act(() => {
      jest.advanceTimersByTime(500);
    });

    // After the delay has passed, it should return the changed value
    expect(result.current).toBe('changed');
  });
});
