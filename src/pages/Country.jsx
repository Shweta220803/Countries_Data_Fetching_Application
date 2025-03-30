import React, { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import Loader from "../components/ui/Loader";
import CountryCard from "../components/layout/CountryCard";
import SearchFilter from "../components/ui/SearchFilter";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countryData, setCountryData] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const response = await getCountryData();
      console.log(response);
      setCountryData(response.data);
    });
  }, []);

  if (isPending) {
    return <Loader />;
  }

  if (!countryData) {
    <h2>Not Country Data Available</h2>;
  }

  // Search country
  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  // here is the main logic
  const filterCountries = countryData.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  return (
    <section className=" container country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countryData}
        setCountries={setCountryData}
      />
      <ul className="grid grid-four-cols">
        {filterCountries.map((currentCountry, index) => {
          return <CountryCard country={currentCountry} key={index} />;
        })}
      </ul>
    </section>
  );
};

export default Country;
