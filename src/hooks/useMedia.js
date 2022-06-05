import { useEffect, useState } from 'react';

export const useMedia = (media) => {
  const [match, setMacth] = useState(null);

  useEffect(() => {
    const handleChange = () => {
      const { matches } = window.matchMedia(media);
      setMacth(matches);
    };
    handleChange();

    window.addEventListener('resize', handleChange);
    return () => window.removeEventListener('resize', handleChange);
  }, [media]);

  return match;
};
