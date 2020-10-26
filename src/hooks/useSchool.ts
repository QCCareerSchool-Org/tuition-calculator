import { useEffect, useState } from 'react';

import { useHostname } from './useHostname';

type School = 'makeup' | 'event' | 'design';

export const getSchool = (hostname: string): School | null => {
  if (hostname === 'calculator.qcmakeupacademy.com' || hostname === 'makeup.localhost') {
    return 'makeup';
  } else if (hostname === 'calculator.qceventplanning.com' || hostname === 'event.localhost') {
    return 'event';
  } else if (hostname === 'calculator.qcdesignschool.com' || hostname === 'design.localhost') {
    return 'design';
  } else {
    return null;
  }
};

export const useSchool = (): School | null => {
  const [ school, setSchool ] = useState<School | null>(null);
  const hostname = useHostname();

  useEffect(() => {
    setSchool(getSchool(hostname));
  }, [ hostname ]);

  return school;
};
