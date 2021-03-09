import React from 'react';
import { Helmet } from 'react-helmet';

import { useSchool } from '../hooks/useSchool';

export const AppHelmet: React.FC = () => {
  const school = useSchool();

  if (school === 'makeup') {
    return (
      <Helmet>
        <script async src="/gtag.js" />
        <script src="/makeup/gtag.js" />
        <title>Tuition Calculator - QC Makeup Academy</title>
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="A tuition calculator for QC Makeup Academy courses" />
        <link rel="icon" href="/makeup/favicon.ico" />
        <link rel="manifest" href="/makeup/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/makeup/apple-touch-icon.png?v=QEMKdlwA73" />
        <link rel="icon" type="image/png" sizes="32x32" href="/makeup/favicon-32x32.png?v=QEMKdlwA73" />
        <link rel="icon" type="image/png" sizes="16x16" href="/makeup/favicon-16x16.png?v=QEMKdlwA73" />
        <link rel="mask-icon" href="/makeup/safari-pinned-tab.svg?v=QEMKdlwA73" color="#5bbad5" />
        <link rel="shortcut icon" href="/makeup/favicon.ico?v=QEMKdlwA73" />
        <meta name="msapplication-TileColor" content="#000000" />
      </Helmet>
    );
  }

  if (school === 'event') {
    return (
      <Helmet>
        <script async src="/gtag.js" />
        <script src="/event/gtag.js" />
        <title>Tuition Calculator - QC Event School</title>
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="A tuition calculator for QC Event School courses" />
        <link rel="icon" href="/event/favicon.ico" />
        <link rel="manifest" href="/event/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/event/apple-touch-icon.png?v=QEMKdlwA73" />
        <link rel="icon" type="image/png" sizes="32x32" href="/event/favicon-32x32.png?v=QEMKdlwA73" />
        <link rel="icon" type="image/png" sizes="16x16" href="/event/favicon-16x16.png?v=QEMKdlwA73" />
        <link rel="mask-icon" href="/event/safari-pinned-tab.svg?v=QEMKdlwA73" color="#5bbad5" />
        <link rel="shortcut icon" href="/event/favicon.ico?v=QEMKdlwA73" />
        <meta name="msapplication-TileColor" content="#000000" />
      </Helmet>
    );
  }

  if (school === 'design') {
    return (
      <Helmet>
        <script async src="/gtag.js" />
        <script src="/design/gtag.js" />
        <title>Tuition Calculator - QC Design School</title>
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="A tuition calculator for QC Design School courses" />
        <link rel="icon" href="/design/favicon.ico" />
        <link rel="manifest" href="/design/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/design/apple-touch-icon.png?v=QEMKdlwA73" />
        <link rel="icon" type="image/png" sizes="32x32" href="/design/favicon-32x32.png?v=QEMKdlwA73" />
        <link rel="icon" type="image/png" sizes="16x16" href="/design/favicon-16x16.png?v=QEMKdlwA73" />
        <link rel="mask-icon" href="/design/safari-pinned-tab.svg?v=QEMKdlwA73" color="#5bbad5" />
        <link rel="shortcut icon" href="/design/favicon.ico?v=QEMKdlwA73" />
        <meta name="msapplication-TileColor" content="#000000" />
      </Helmet>
    );
  }

  return null;
};
