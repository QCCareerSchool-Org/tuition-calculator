import { useEffect, useState } from 'react';
import { useFetchImproved } from './useFetch';

type GeoLocation = {
  countryCode: string;
  provinceCode: string | null;
}

export const useCountry = (): readonly [ string, React.Dispatch<React.SetStateAction<string>> ] => {
  const [ country, setCountry ] = useState('US');

  // determine the visitor's geo location by ip address
  const geoLocationUrl = 'https://api.qccareerschool.com/geoLocation/ip';
  const [ geoLocation ] = useFetchImproved<GeoLocation>(geoLocationUrl, { countryCode: 'US', provinceCode: 'MD' });

  useEffect(() => {
    setCountry(geoLocation.countryCode);
  }, [ geoLocation ]);

  return [ country, setCountry ] as const;
};
