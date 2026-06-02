import { useEffect, useRef } from 'react';

export function useStableCallback(callback) {
  const ref = useRef(callback);

  useEffect(() => {
    ref.current = callback;
  });

  return ref.current;
}
