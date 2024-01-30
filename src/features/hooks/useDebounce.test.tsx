import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-test-renderer';
import useDebounce from './useDebounce'; 

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

    expect(result.current).toBe('initial');

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(result.current).toBe('changed');
  });
});
