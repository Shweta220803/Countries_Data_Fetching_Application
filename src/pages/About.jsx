import React from "react";
import countryFacts from "../api/countryData.json";

const About = () => {
  return (
    <section className="container section-about">
      <h2 className="container-title">
        Here are the interesting facts <br /> we are proud of
      </h2>
      <div className="gradient-cards">
        {countryFacts.map((country) => {
          const {id, countryName,capital,population, interestingFact} = country
          return (
            <div className="card" key={id}>
              <div className="container-card bg-green-box">
                <p className="card-title">{countryName}</p>
                <p>
                  <span className="card-description">Capital: {capital}</span>
                </p>
                <p>
                  <span className="card-description">Population: {population}</span>
                </p>
                <p>
                  <span className="card-description">
                    Interesting Fact: {interestingFact}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
