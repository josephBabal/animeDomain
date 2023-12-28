"use client"

import { useEffect, useRef } from 'react';

export const useInitialLoad = () => {
  const isInitialLoad = useRef(true);

  useEffect(() => {
    // Set isInitialLoad to false after the initial render
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
    } else {
      isInitialLoad.current = true
    }

  }, []);

  return isInitialLoad.current;
};

