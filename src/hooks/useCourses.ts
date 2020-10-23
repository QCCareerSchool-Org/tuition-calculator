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
        { code: 'AB', name: 'Airbrush Makeup Workshop' },
      ];
      dispatch({ type: 'SET_AVAILABLE_COURSES', payload: courses });
    } else if (school === 'event') {
      const courses: Course[] = [
        { code: 'EP', name: 'Event & Wedding Planning' },
        { code: 'WP', name: 'Wedding Planning' },
        { code: 'CE', name: 'Event Planning' },
        { code: 'CP', name: 'Coporate Event Planning' },
      ];
      dispatch({ type: 'SET_AVAILABLE_COURSES', payload: courses });
    } else if (school === 'design') {
      const courses: Course[] = [
        { code: 'I2', name: 'Interior Design' },
        { code: 'MS', name: 'Staging for Designers' },
        { code: 'ST', name: 'Home Stagine' },
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
