import React from 'react';

import { PriceResult } from '../hooks/usePrice';

import { Hightlight } from '../styled/Highlight';
import { Size } from '../styled/Size';

type Props = {
  price: PriceResult;
}

export const PlanFull: React.FC<Props> = ({ price }) => (
  <Size size="big">
    <p><strong><Hightlight>Total:</Hightlight> {price.currency.symbol}{price.plans.full.total}</strong></p>
    <h4>Full Payment Plan</h4>
    <p>Make a one-time payment of <Hightlight><strong>{price.currency.symbol}{price.plans.full.deposit}</strong></Hightlight>{price.plans.full.discount > 0 && <><br />and <strong>save {price.currency.symbol}{price.plans.full.discount}!</strong></>}</p>
    <p>All prices are in {price.currency.name}.</p>
  </Size>
);
