import React, { useEffect, useState } from 'react';

import { useFetchImproved } from '../hooks/useFetch';

import { FormGroup } from '../styled/FormGroup';
import { Label } from '../styled/Label';
import { Select } from '../styled/Select';

type Props = {
  country: string;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
}

type Country = {
  code: string;
  name: string;
}

export const Country: React.FC<Props> = ({ country, setCountry }) => {
  const [ countries, setCountries ] = useState<Country[]>([]);

  // get a list of countries
  const countryListUrl = 'https://api.qccareerschool.com/geoLocation/countries';
  const [ countryList ] = useFetchImproved<Country[]>(countryListUrl, []);

  useEffect(() => {
    setCountries(countryList);
  }, [ countryList ]);

  return (
    <FormGroup>
      <Label htmlFor="country-code">Country</Label>
      <Select id="country-code" onChange={e => setCountry(e.target.value)} value={country}>
        {countries.map(c => (<option key={c.code} value={c.code}>{c.name}</option>))}
      </Select>
    </FormGroup>
  );
};
