import React from 'react';
import { NavLink } from 'react-router-dom';

const CountryCard = ({ country }) => {
  // Destructure properties with default values to prevent errors if data is missing
  const {
    flags = {},
    name = {},
    population = 0,
    region = 'Unknown',
    capital = []
  } = country || {};

  // Determine the display name with a more generous truncation limit
  const displayName = name.common?.length > 15
    ? `${name.common.slice(0, 15)}...`
    : name.common || 'Unknown';

  return (
    <li className='country-card card'>
      <div className='container-card bg-white-box'>
        {/* Use optional chaining and provide a fallback for the flag */}
        <img src={flags?.svg || 'default-flag.png'} alt={`${displayName} flag`} />

        <div className='countryInfo'>
          <p className="card-title">{displayName}</p>
          <p>
            <span className="card-description">Population: </span>
            {population.toLocaleString()}
          </p>
          <p>
            <span className="card-description">Region: </span>
            {region}
          </p>
          <p>
            <span className="card-description">Capital: </span>
            {/* Check if capital is a non-empty array before accessing */}
            {Array.isArray(capital) && capital.length > 0 ? capital[0] : 'N/A'}
          </p>

          {/* Ensure name.common exists before creating the NavLink */}
          {name.common && (
            <NavLink to={`/country/${name.common}`}>
              <button>Read More</button>
            </NavLink>
          )}
        </div>
      </div>
    </li>
  );
};

export default CountryCard;
