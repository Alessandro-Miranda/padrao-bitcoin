import flagBr from '@Assets/flagBR.png';
import { CountryList } from '@Components/ui/CountryList';
import { useRef } from 'react';

export function CountrySelector() {
  const countryListRef = useRef<HTMLUListElement>(null);

  const handleSelectLanguage = () => {
    const current = countryListRef.current;
    current?.classList.toggle('show');
  };

  return (
    <div className="country-select-wrapper">
      <button className="country-select d-flex align-items-center" onClick={handleSelectLanguage}>
        <img src={flagBr} width="30" height="auto" alt="country-flag" />
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 320 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
        </svg>
      </button>

      <CountryList ref={countryListRef} />
    </div>
  );
}