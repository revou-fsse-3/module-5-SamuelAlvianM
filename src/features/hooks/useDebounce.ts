import { useEffect, useState } from "react";

export default function useDebounce<T>(value: T, daley = 500) {
  const [debounce, setDebounce] = useState<T>(value);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDebounce(value);
    }, daley);
    return () => clearTimeout(timeOut);
  }, [value, daley]);
  return debounce;
}
