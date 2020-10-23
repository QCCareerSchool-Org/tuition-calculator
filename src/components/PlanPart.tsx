import React from 'react';

import { PriceResult } from '../hooks/usePrice';

import { Big } from '../styled/Big';
import { Hightlight } from '../styled/Highlight';

type Props = {
  price: PriceResult;
}

export const PlanPart: React.FC<Props> = ({ price }) => (
  <Big>
    <p><strong><Hightlight>Total:</Hightlight> {price.currency.symbol}{price.plans.part.total}</strong></p>
    <h4>Installment Plan</h4>
    <p>Pay a <strong><Hightlight>deposit</Hightlight></strong> of <strong><Hightlight>{price.currency.symbol}{price.plans.part.deposit}</Hightlight></strong> when you enroll, followed by <strong><Hightlight>{price.plans.part.installments}</Hightlight></strong> monthly installments of <strong><Hightlight>{price.currency.symbol}{price.plans.part.installmentSize}</Hightlight></strong>.</p>
    <p>All prices are in {price.currency.name}.</p>
  </Big>
);
