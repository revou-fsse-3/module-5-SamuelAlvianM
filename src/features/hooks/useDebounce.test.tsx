import { renderHook, act } from '@testing-library/react';
// import { act } from 'react-test-renderer';
import useDebounce from './useDebounce'; 
import {test, expect, describe, vi} from 'vitest';

describe('useDebounce Hook Tests', () => {
  test('returns the value without delay', () => {
    const { result } = renderHook(() => useDebounce('test', 0));

    expect(result.current).toBe('test');
  });

  test('returns the value after the specified delay', async () => {
    vi.useFakeTimers();

    const { result, rerender } = renderHook((props) => useDebounce(props.value, props.delay), {
      initialProps: { value: 'initial', delay: 500 },
    });

    act(() => {
      vi.advanceTimersByTime(250);
      rerender({ value: 'changed', delay: 500 });
    });

    expect(result.current).toBe('initial');

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current).toBe('changed');
  });
});
