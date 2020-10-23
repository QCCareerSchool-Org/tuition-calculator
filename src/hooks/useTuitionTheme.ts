import { useEffect, useState } from 'react';

import { useSchool } from './useSchool';

export type TuitionTheme = {
  primary: string;
  text: string;
  size: {
    normal: string;
    big: string;
    bigger: string;
  };
}

const defaultTheme: TuitionTheme = {
  primary: 'mediumseagreen',
  text: '#444',
  size: { normal: '16px', big: '20px', bigger: '32px' },
};

export const useTuitionTheme = (): TuitionTheme => {
  const [ theme, setTheme ] = useState<TuitionTheme>(defaultTheme);
  const school = useSchool();

  useEffect(() => {
    if (school === 'makeup') {
      setTheme({ ...defaultTheme, primary: '#ec3e86' });
    } else if (school === 'event') {
      setTheme({ ...defaultTheme, primary: '#14a98a' });
    } else if (school === 'design') {
      setTheme({ ...defaultTheme, primary: '#ec3e86' });
    } else {
      setTheme({ ...defaultTheme, primary: 'orange' });
    }
  }, [ school ]);

  return theme;
};
