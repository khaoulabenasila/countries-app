import React, { useState } from "react";
import Filter from "../Composents/Filter";
import Countries from "./Countries";
import useFetchData from "../Util/api";

const Home = () => {
  const [selectedContinent, setSelectedContinent] = useState("");
  const fetchedData = useFetchData();
  const dipslayedCountries = selectedContinent
    ? fetchedData.filter((c) => c.region && c.region === selectedContinent)
    : fetchedData;

  const handleSelectedCountryChange = (event) => {
    setSelectedContinent(event.target.value);
  };
  const handleButton = () => {
    setSelectedContinent("");
  };
  return (
    <div>
      {dipslayedCountries.length > 0 && (
        <div>
          <Filter
            selectedContinent={selectedContinent}
            onRadioChange={handleSelectedCountryChange}
            onButtonClicked={handleButton}
          />

          <Countries countriesList={dipslayedCountries} />
        </div>
      )}
    </div>
  );
};

export default Home;
