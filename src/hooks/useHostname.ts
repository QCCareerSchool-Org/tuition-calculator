import { useEffect, useState } from 'react';

export const useHostname = (): string => {
  const [ hostname, setHostname ] = useState(window.location.hostname);

  useEffect(() => {
    const eventListener = () => {
      setHostname(window.location.hostname);
    };
    window.addEventListener('popstate', eventListener);
    return () => window.removeEventListener('popstate', eventListener);
  }, []);

  return hostname;
};
