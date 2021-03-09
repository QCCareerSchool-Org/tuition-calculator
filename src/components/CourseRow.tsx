import React from 'react';

import { Align } from '../styled/Align';
import { Highlight } from '../styled/Highlight';
import { WhiteSpace } from '../styled/WhiteSpace';

type Props = {
  name: string;
  currencySymbol: string;
  cost: number;
  multiCourseDiscount: number;
  free: boolean;
}

export const CourseRow: React.FC<Props> = ({ name, currencySymbol, cost, multiCourseDiscount, free }) => (
  <>
    <tr>
      <td>{name}{free && <Highlight><strong> FREE!</strong></Highlight>}</td>
      <td><Align align="right">{currencySymbol}{(free ? 0 : cost).toFixed(2)}</Align></td>
    </tr>
    {!free && multiCourseDiscount > 0 && (
      <tr>
        <td><Highlight>{Math.round(multiCourseDiscount / cost * 100)}% Discount</Highlight></td>
        <td><Align align="right"><WhiteSpace whiteSpace="nowrap"><Highlight>&minus;{currencySymbol}{multiCourseDiscount.toFixed(2)}</Highlight></WhiteSpace></Align></td>
      </tr>
    )}
  </>
);
