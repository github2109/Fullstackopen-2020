const CountryTab = ({ country, setSearch }) => {
  const showDetailCountry = () => {
    setSearch(country.name.common);
  };
  return (
    <div>
      {country.name.common}
      <button onClick={showDetailCountry}>show</button>
    </div>
  );
};

export default CountryTab;
