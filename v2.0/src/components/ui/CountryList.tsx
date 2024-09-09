import flagBr from '@Assets/flagBR.png';
import flagCN from '@Assets/flagCN.png';
import flagPY from '@Assets/flagPY.png';
import flagUSA from '@Assets/flagUSA.png';
import { RefObject } from 'react';

type CountryListType = {
  flag: string;
  country: 'BR' | 'ES' | '中文' | 'EN';
};

export function CountryList({ ref }: { ref: RefObject<HTMLUListElement> }) {
  const countries: CountryListType[] = [
    { flag: flagBr, country: 'BR' },
    { flag: flagPY, country: 'ES' },
    { flag: flagCN, country: '中文' },
    { flag: flagUSA, country: 'EN' },
  ];

  return (
    <ul className="country-list" ref={ref}>
      {countries.map(({ country, flag }) => (
        <li key={country}>
          <img src={flag} alt={country} />
          {country}
        </li>
      ))}
    </ul>
  );
}
