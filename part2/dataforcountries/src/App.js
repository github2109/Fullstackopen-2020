import {useEffect,useState } from "react";
import axios from "axios"
import Filter from "./component/Filter";
import Content from "./component/Content";
const App = () => {
  const [countries,setCountries] = useState([]);
  const [search,setSearch] = useState('');
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => setCountries(response.data));
  },[]);
  return (
    <div>
      <Filter setSearch={setSearch} />
      <Content countries={countries} search={search} setSearch={setSearch} />
    </div>
  );
};

export default App;
