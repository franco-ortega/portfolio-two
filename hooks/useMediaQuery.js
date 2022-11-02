import { useEffect, useState } from 'react';

export const useMediaQuery = (query) => {
  const [isMatch, setIsMatch] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setIsMatch(window.matchMedia(query).matches);

    const resizeObserver = new ResizeObserver(() => {
      // Set the current width
      setScreenWidth(window.innerWidth);
    });

    // Add a listener to main
    resizeObserver.observe(document.querySelector('main'));

    // Disconnect listener
    return () => resizeObserver.disconnect();
  }, [query, screenWidth]);

  return { isMatch };
};
