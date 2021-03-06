import React from 'react';
import { Plan } from '../App';

import { PriceResult } from '../hooks/usePrice';

import { Card } from '../styled/Card';
import { Align } from '../styled/Align';
import { Container } from '../styled/Container';
import { Section } from '../styled/Section';
import { PlanFull } from './PlanFull';
import { PlanPart } from './PlanPart';

type Props = {
  price: PriceResult | null;
  plan: Plan;
}

export const PriceSection: React.FC<Props> = ({ price, plan }) => {
  if (!price) {
    return null;
  }
  return (
    <Section inverse={true}>
      <Container>
        <Card>
          <Align align="center">
            {price.courses.length === 0
              ? <p>Please choose one or more courses above</p>
              : (
                <>
                  {plan === 'full' && <PlanFull price={price} />}
                  {plan === 'part' && <PlanPart price={price} />}
                </>
              )
            }
          </Align>
        </Card>
      </Container>
    </Section>
  );
};
