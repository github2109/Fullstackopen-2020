import CountryTab from "./CountryTab";
import CountryDetail from "./CountryDetail";

const Content = ({ countries, search, setSearch }) => {
  const showCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );
  if (showCountries.length > 10){
    return <p>Too many matches,specify another filter</p>;
  }
  if (showCountries.length > 1)
    return showCountries.map((country, i) => (
      <CountryTab key={i} country={country} setSearch={setSearch} />
    ));
  if (showCountries.length === 1) {
    return <CountryDetail country={showCountries[0]} />;
  }
};

export default Content;
