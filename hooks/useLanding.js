import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const useLanding = () => {
  const [landing, setLanding] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [noPreference, setNoPreference] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // checks preference to determine when Landing is removed in setTimeOut below
    setNoPreference(
      window.matchMedia('(prefers-reduced-motion: no-preference)').matches
    );

    // only display Landing on home page
    if (router.pathname !== '/') setLanding(false);
  }, [router]);

  const onWelcomeClick = () => {
    if (noPreference) setFadeOut(true);

    setTimeout(
      () => {
        setLanding(false);
      },
      noPreference ? 1000 : 0
    );
  };

  return {
    landing,
    fadeOut,
    onWelcomeClick
  };
};
