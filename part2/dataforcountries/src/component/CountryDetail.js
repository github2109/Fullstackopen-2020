import { useEffect, useState } from "react";
import axios from "axios";
const CountryDetail = ({ country }) => {
  const [weather, setWeather] = useState({
    temperature: 0,
    imgIcon: "",
    wind: 0,
  });
  useEffect(() => {
    axios
      .get(`http://api.weatherapi.com/v1/current.json?key=1b0f0f0979bc4f1ca8891752222107&q=${country.capital}&aqi=no`)
      .then((response) => {
        const dataWeather = {
          temperature: response.data.current.temp_c,
          imgIcon: response.data.current.condition.icon ,
          wind: response.data.current.wind_kph,
        };
        setWeather(dataWeather);
      });
  }, [country]);
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <h2>languages:</h2>
      <ul>
        {Object.keys(country.languages).map((key) => (
          <li key={key}>{country.languages[key]}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt="Flag" width="200" height="150" />
      <h3>Weather in {country.capital}</h3>
      <p>temperature {weather.temperature} Celcius</p>
      <img src={weather.imgIcon} alt="Flag" width="200" height="150" />
      <p>wind {weather.wind} m/s</p>
    </div>
  );
};

export default CountryDetail;
