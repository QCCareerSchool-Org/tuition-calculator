import React from 'react';

import { PriceResult } from '../hooks/usePrice';

import { Container } from '../styled/Container';
import { Heading1 } from '../styled/Heading1';
import { OutlineButton } from '../styled/OutlineButton';
import { Section } from '../styled/Section';

import { Plan } from '../App';

type Props = {
  price: PriceResult | null;
  plan: Plan;
  setPlan: React.Dispatch<React.SetStateAction<Plan>>;
}

export const PaymentPlanSection: React.FC<Props> = ({ price, plan, setPlan }) => {
  if (!price) {
    return null;
  }
  return (
    <Section>
      <Container>
        <Heading1>Choose Your Payment Plan</Heading1>
        <OutlineButton selected={plan === 'full'} onClick={() => setPlan('full')}><strong>Full Payment Plan</strong>{price.plans.full.discount > 0 && <>&mdash;Save {price.currency.symbol}{price.plans.full.discount}</>}</OutlineButton>
        <OutlineButton selected={plan === 'part'} onClick={() => setPlan('part')}><strong>Installment Plan</strong></OutlineButton>
      </Container>
    </Section>
  );
};
