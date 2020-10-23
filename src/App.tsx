import React, { useState } from 'react';

import { useCountry } from './hooks/useCountry';
import { useCourses } from './hooks/useCourses';
import { usePrice } from './hooks/usePrice';

import { AppHelmet } from './components/AppHelmet';
import { CountrySection } from './components/CountrySection';
import { CoursesSection } from './components/CoursesSection';
import { EmailSection } from './components/EmailSection';
import { HeaderSection } from './components/HeaderSection';
import { PaymentPlanSection } from './components/PaymentPlanSection';
import { PriceSection } from './components/PriceSection';
import { TuitionThemeProvider } from './providers/TuitionThemeProvider';

export type Plan = 'full' | 'part';

export const App: React.FC = () => {
  const [ country, setCountry ] = useCountry();
  const [ coursesState, coursesDispatch ] = useCourses();
  const price = usePrice(country, coursesState.selected);
  const [ plan, setPlan ] = useState<Plan>('full');

  return (
    <TuitionThemeProvider>
      <AppHelmet />
      <HeaderSection></HeaderSection>
      <CountrySection country={country} setCountry={setCountry} />
      <CoursesSection price={price} coursesState={coursesState} coursesDispatch={coursesDispatch} />
      <PaymentPlanSection price={price} plan={plan} setPlan={setPlan} />
      <PriceSection price={price} plan={plan}></PriceSection>
      <EmailSection country={country} courses={coursesState.selected}></EmailSection>
    </TuitionThemeProvider>
  );
};
