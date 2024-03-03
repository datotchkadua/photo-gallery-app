import { useEffect, useState } from "react";

type DebouncedValue<T> = T | undefined;

const useDebounce = <T>(value: T, delay: number = 500): DebouncedValue<T> => {
  const [debouncedValue, setDebouncedValue] =
    useState<DebouncedValue<T>>(value);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(id);
    };
  }, [value, delay]);

  return debouncedValue;
};
export default useDebounce;
