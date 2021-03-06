import React from 'react';

import { PriceResult } from '../hooks/usePrice';

import { formatCurrency } from '../lib/formatCurrency';

import { Heading2 } from '../styled/Heading2';
import { Highlight } from '../styled/Highlight';
import { Size } from '../styled/Size';

type Props = {
  price: PriceResult;
}

export const PlanFull: React.FC<Props> = ({ price }) => (
  <Size size="big">
    <p><strong><Highlight>Total:</Highlight> {price.currency.symbol}{formatCurrency(price.plans.full.total)}</strong></p>
    <Heading2>Full Payment Plan</Heading2>
    <p>Make a one-time payment of <Highlight><strong>{price.currency.symbol}{formatCurrency(price.plans.full.deposit)}</strong></Highlight>{price.plans.full.discount > 0 && <><br />and <strong>save {price.currency.symbol}{formatCurrency(price.plans.full.discount)}!</strong></>}</p>
    <p>All prices are in {price.currency.name}.</p>
  </Size>
);
