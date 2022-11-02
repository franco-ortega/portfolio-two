import { useState } from 'react';

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const onDarkModeClick = () => setDarkMode((prevState) => !prevState);

  return { darkMode, onDarkModeClick };
};
