import React from 'react';

import { Container } from '../styled/Container';
import { Heading1 } from '../styled/Heading1';
import { Section } from '../styled/Section';

export const HeaderSection: React.FC = () => (
  <Section inverse={true}>
    <Container>
      <Heading1>Tuition Calculator</Heading1>
    </Container>
  </Section>
);
