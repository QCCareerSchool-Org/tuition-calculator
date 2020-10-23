import React from 'react';

import { Align } from '../styled/Align';
import { Size } from '../styled/Size';

export const BundleMessage: React.FC = () => (
  <Align align="center">
    <p>
      <strong><Size size="big">BUNDLE AND SAVE</Size></strong>
      <br />
      <strong><Size size="bigger">GET 50% OFF</Size></strong>
      <br />
      ANY ADDITIONAL COURSE
      <br />
      OF EQUAL OR LESSER VALUE!
    </p>
  </Align>
);
