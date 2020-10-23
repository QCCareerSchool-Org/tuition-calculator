import React from 'react';

import { Align } from '../styled/Align';
import { Container } from '../styled/Container';
import { Heading1 } from '../styled/Heading1';
import { LogoImg } from '../styled/LogoImg';
import { Section } from '../styled/Section';

export const HeaderSection: React.FC = () => (
  <Section inverse={true}>
    <Container>
      <Align align="center">
        <LogoImg src={require('../images/calculator-icon.svg')} alt="calculator icon" />
      </Align>
      <Heading1>Tuition Calculator</Heading1>
    </Container>
  </Section>
);
