import React, { useTransition, useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import Loader from "../ui/Loader";
import { getCountryIndividualData } from '../../api/postApi';

const CountryDetails = () => {
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null); // Initialize with null

  useEffect(() => {
    startTransition(async () => {
      const response = await getCountryIndividualData(params.id);

      if (response.status === 200 && response.data && response.data.length > 0) {
        setCountry(response.data[0]);
        console.log(Object.keys(response.data[0].name.nativeName));
      }
    });
  }, [params.id]); // Include params.id in dependencies

  if (isPending) {
    return <Loader />;
  }

  // If country data is not loaded, show a fallback (you could also show a Loader)
  if (!country) {
    return <h1>No country data available.</h1>;
  }

  return (
    <section className="card country-details-card container">
      <div className="container-card bg-white-box">
        <div className="country-image grid grid-two-cols">
          <img
            src={country.flags?.svg}
            alt={country.flags?.alt || 'Country flag'}
            className="flag"
          />
          <div className="country-content">
            <p className="card-title">{country.name.official}</p>
            <div className="infoContainer">
              <p>
                <span className="card-description">Native Names:</span>
                {country.name.nativeName &&
                  Object.keys(country.name.nativeName)
                    .map((key) => country.name.nativeName[key].common)
                    .join(", ")}
              </p>
              <p>
                <span className="card-description">Population: </span>
                {country.population ? country.population.toLocaleString() : "N/A"}
              </p>
              <p>
                <span className="card-description">Region: </span>
                {country.region || "N/A"}
              </p>
              <p>
                <span className="card-description">Sub Region: </span>
                {country.subregion || "N/A"}
              </p>
              <p>
                <span className="card-description">Capital: </span>
                {country.capital || "N/A"}
              </p>
              <p>
                <span className="card-description">Top Level Domain: </span>
                {country.tld && country.tld[0] ? country.tld[0] : "N/A"}
              </p>
              <p>
                <span className="card-description">Currencies: </span>
                {country.currencies &&
                  Object.keys(country.currencies)
                    .map((curElem) => country.currencies[curElem].name)
                    .join(", ")}
              </p>
              <p>
                <span className="card-description">Languages: </span>
                {country.languages &&
                  Object.keys(country.languages)
                    .map((key) => country.languages[key])
                    .join(", ")}
              </p>
            </div>
          </div>
        </div>
        <div className="country-card-backBtn">
          <NavLink to="/country" className="backBtn">
            <button>Go Back</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
