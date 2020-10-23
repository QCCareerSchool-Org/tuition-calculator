import React from 'react';

import { PriceResult } from '../hooks/usePrice';

import { formatCurrency } from '../lib/formatCurrency';

import { Heading2 } from '../styled/Heading2';
import { Highlight } from '../styled/Highlight';
import { Size } from '../styled/Size';

type Props = {
  price: PriceResult;
}

export const PlanPart: React.FC<Props> = ({ price }) => (
  <Size size="big">
    <p><strong><Highlight>Total:</Highlight> {price.currency.symbol}{formatCurrency(price.plans.part.total)}</strong></p>
    <Heading2>Installment Plan</Heading2>
    <p>Pay a <strong><Highlight>deposit</Highlight></strong> of <strong><Highlight>{price.currency.symbol}{formatCurrency(price.plans.part.deposit)}</Highlight></strong> when you enroll, followed by <strong><Highlight>{price.plans.part.installments}</Highlight></strong> monthly installments of <strong><Highlight>{price.currency.symbol}{formatCurrency(price.plans.part.installmentSize)}</Highlight></strong>.</p>
    <p>All prices are in {price.currency.name}.</p>
  </Size>
);
