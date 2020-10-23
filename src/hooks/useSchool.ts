import { useEffect, useState } from 'react';

import { useHostname } from './useHostname';

type School = 'makeup' | 'event' | 'design';

export const getSchool = (hostname: string): School | null => {
  return window.location.hostname === 'calculator.qcmakeupacademy.com'
  ? 'makeup'
  : window.location.hostname === 'calculator.qceventplanning.com'
    ? 'event'
    : window.location.hostname === 'calculator.qcdesignschool.com'
      ? 'design'
      : null;
};

export const useSchool = (): School | null => {
  const [ school, setSchool ] = useState<School | null>(null);
  const hostname = useHostname();

  useEffect(() => {
    setSchool(getSchool(hostname));
  }, [ hostname ]);

  return school;
};
