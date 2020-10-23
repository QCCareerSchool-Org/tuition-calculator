import React from 'react';

import { Container } from '../styled/Container';
import { Heading1 } from '../styled/Heading1';
import { Section } from '../styled/Section';
import { Country } from './Country';

type Props = {
  country: string;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
}

export const CountrySection: React.FC<Props> = ({ country, setCountry }) => (
  <Section>
    <Container>
      <Heading1>Choose Your Location</Heading1>
      <Country country={country} setCountry={setCountry} />
    </Container>
  </Section>
);
