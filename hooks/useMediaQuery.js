import { useEffect, useState } from 'react';

export const useMediaQuery = (query) => {
  const isMatch = window.matchMedia(query);
  const [matches, setMatches] = useState(isMatch.matches);

  useEffect(() => {
    const handler = (e) => setMatches(e.matches);

    isMatch.addEventListener(handler);

    return () => isMatch.removeEventListener(handler);
  });

  return { matches };
};
