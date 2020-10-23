import { useEffect, useState } from 'react';

export const useHostname = (): string => {
  const [ hostname, setHostname ] = useState(window.location.hostname);

  useEffect(() => {
    const addEventListener = () => {
      setHostname(window.location.hostname);
    };
    window.addEventListener('popstate', addEventListener);
    return () => window.removeEventListener('popstate', addEventListener);
  }, []);

  return hostname;
};
