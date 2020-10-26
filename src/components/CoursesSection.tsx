import React from 'react';
import { PriceResult } from '../hooks/usePrice';

import { CoursesAction, CoursesState } from '../state/courses';

import { Container } from '../styled/Container';
import { Heading1 } from '../styled/Heading1';
import { Section } from '../styled/Section';
import { BundleMessage } from './BundleMessage';
import { CourseSelection } from './CourseSelection';

import { ToggleButton } from './ToggleButton';

type Props = {
  price: PriceResult | null;
  coursesState: CoursesState;
  coursesDispatch: React.Dispatch<CoursesAction>;
}

export const CoursesSection: React.FC<Props> = ({ price, coursesState, coursesDispatch }) => (
  <Section inverse={true}>
    <Container>
      <Heading1>Choose Your Courses</Heading1>
      <BundleMessage />
      {coursesState.available
        .filter(c => !coursesState.hidden.includes(c.code))
        .map(c => <ToggleButton
          key={c.code}
          text={c.name}
          selected={coursesState.selected.includes(c.code)}
          disabled={coursesState.disabled.includes(c.code)}
          inverse={true}
          onClick={() => coursesDispatch({ type: 'TOGGLE_COURSE', payload: c.code })}
        />)
      }
      <CourseSelection price={price} />
    </Container>
  </Section>
);
