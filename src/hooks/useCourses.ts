import { useEffect, useReducer } from 'react';

import { Course, CoursesAction, coursesReducer, CoursesState, initialCoursesState } from '../state/courses';
import { useSchool } from './useSchool';

export const useCourses = (): readonly [ CoursesState, React.Dispatch<CoursesAction> ] => {
  const [ state, dispatch ] = useReducer(coursesReducer, initialCoursesState);
  const school = useSchool();

  useEffect(() => {
    if (school === 'makeup') {
      const courses: Course[] = [
        { code: 'MZ', name: 'Master Makeup Artistry' },
        { code: 'MK', name: 'Makeup Artistry' },
        { code: 'SK', name: 'Skincare' },
        { code: 'AB', name: 'Airbrush Makeup Workshop' },
        { code: 'SF', name: 'Special FX Makeup' },
        { code: 'HS', name: 'Hair Styling Essentials' },
        { code: 'PF', name: 'Fashion Styling' },
        { code: 'VM', name: 'Virtual Makeup' },
        { code: 'MW', name: 'Pro Makeup Workshop' },
        { code: 'GB', name: 'Global Beauty' },
        { code: 'PW', name: 'Portfolio Development Workshop' },
      ];
      dispatch({ type: 'SET_AVAILABLE_COURSES', payload: courses });
    } else if (school === 'event') {
      const courses: Course[] = [
        { code: 'EP', name: 'Event & Wedding Planning' },
        { code: 'CP', name: 'Coporate Event Planning' },
        { code: 'CE', name: 'Event Planning' },
        { code: 'WP', name: 'Wedding Planning' },
        { code: 'ED', name: 'Event Decor' },
        { code: 'EB', name: 'Accelerate Your Business' },
        { code: 'LW', name: 'Luxury Wedding & Event Planning' },
        { code: 'DW', name: 'Destination Wedding Planning' },
        { code: 'FL', name: 'Festivals and Live Events' },
        { code: 'PE', name: 'Promotional Event Planning' },
        { code: 'TT', name: 'Travel & Tourism' },
        { code: 'VE', name: 'Virtual Event Training' },
      ];
      dispatch({ type: 'SET_AVAILABLE_COURSES', payload: courses });
    } else if (school === 'design') {
      const courses: Course[] = [
        { code: 'I2', name: 'Interior Design' },
        { code: 'MS', name: 'Staging for Designers' },
        { code: 'ST', name: 'Home Staging' },
        { code: 'PO', name: 'Professional Organizing' },
        { code: 'FS', name: 'Feng Shui Design' },
        { code: 'CC', name: 'Color Consultant' },
        { code: 'AP', name: 'Aging in Place' },
        { code: 'DB', name: 'Accelerate Your Design Business' },
        { code: 'VD', name: 'Virtual Design Training' },
      ];
      dispatch({ type: 'SET_AVAILABLE_COURSES', payload: courses });
    } else {
      const courses: Course[] = [
        { code: 'MZ', name: 'Master Makeup Artistry' },
        { code: 'MK', name: 'Makeup Artistry' },
        { code: 'AB', name: 'Airbrush Makeup Workshop' },
      ];
      dispatch({ type: 'SET_AVAILABLE_COURSES', payload: courses });
    }
  }, [ dispatch, school ]);

  return [ state, dispatch ] as const;
};
