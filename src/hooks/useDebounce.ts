import { useCallback, useRef } from 'react';

const useDebounce = (delay: number) => {
  const timer = useRef<number | undefined>();

  const debounce = useCallback(
    (callback: () => void) => {
      clearTimeout(timer.current);
      timer.current = setTimeout(callback, delay);
    },
    [delay],
  );

  return debounce;
};

export default useDebounce;
