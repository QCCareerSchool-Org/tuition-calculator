import React from 'react';

import { PriceResult } from '../hooks/usePrice';

import { Card } from '../styled/Card';
import { CourseTable } from '../styled/CourseTable';
import { Heading2 } from '../styled/Heading2';

import { CourseRow } from './CourseRow';

type Props = {
  price: PriceResult | null;
}

export const CourseSelection: React.FC<Props> = ({ price }) => {
  if (!price || price.courses.length === 0) {
    return null;
  }
  return (
    <Card>
      <Heading2>Selected Courses</Heading2>
      <CourseTable>
        <tbody>
          {price.courses.map(c => <CourseRow key={c.code} name={c.name} currencySymbol={price.currency.symbol} cost={c.cost} multiCourseDiscount={c.multiCourseDiscount} free={c.free} />)}
        </tbody>
      </CourseTable>
    </Card>
  );
};
