import { useEffect, useState } from 'react';

import { useSchool } from './useSchool';

type TuitionTheme = {
  primary: string;
  text: string;
  size: {
    normal: string;
    bigger: string;
  };
}

const defaultTheme: TuitionTheme = {
  primary: 'mediumseagreen',
  text: '#333',
  size: { normal: '16px', bigger: '20px' },
};

export const useTuitionTheme = (): TuitionTheme => {
  const [ theme, setTheme ] = useState<TuitionTheme>(defaultTheme);
  const school = useSchool();

  useEffect(() => {
    if (school === 'makeup') {
      setTheme({ ...defaultTheme, primary: 'pink' });
    } else if (school === 'event') {
      setTheme({ ...defaultTheme, primary: 'green' });
    } else if (school === 'design') {
      setTheme({ ...defaultTheme, primary: 'blue' });
    } else {
      setTheme({ ...defaultTheme, primary: 'orange' });
    }
  }, [ school ]);

  return theme;
};
