import React from 'react';

import { PriceResult } from '../hooks/usePrice';
import { Align } from '../styled/Align';

import { Card } from '../styled/Card';
import { CourseTable } from '../styled/CourseTable';
import { Heading2 } from '../styled/Heading2';
import { Highlight } from '../styled/Highlight';

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
          {price.courses.map(c => (
            <React.Fragment key={c.code}>
              <tr>
                <td>{c.name}</td>
                <td><Align align="right">{price.currency.symbol}{c.cost.toFixed(2)}</Align></td>
              </tr>
              {c.multiCourseDiscount > 0 && (
                <tr>
                  <td>{Math.round(c.multiCourseDiscount / c.cost * 100)}% Off</td>
                  <td><Align align="right"><Highlight>&minus;{price.currency.symbol}{c.multiCourseDiscount.toFixed(2)}</Highlight></Align></td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </CourseTable>
    </Card>
  );
};
