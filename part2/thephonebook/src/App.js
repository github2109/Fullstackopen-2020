import { useEffect, useState } from "react";
import PersonForm from "./component/PersonForm";
import Persons from "./component/Persons";
import Filter from "./component/Filter";
import Notification from "./component/Notification";
import personService from "./services/persons";
const App = () => {
  const [message, setMessage] = useState(null);
  const [isError, setIsError] = useState(false);
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({
    name: "",
    number: "",
  });
  const [search, setSearch] = useState("");
  useEffect(() => {
    personService.getAll().then((dataPersons) => {
      setPersons(dataPersons);
    });
  }, []);
  return (
    <div>
      <h1>Phonebook</h1>
      <Notification mess={message} isError={isError} />
      <Filter setSearch={setSearch} />
      <h2>Add a new</h2>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        newPerson={newPerson}
        setNewPerson={setNewPerson}
        setMessage={setMessage}
        setIsError={setIsError}
      />
      <h3>Numbers</h3>
      <Persons
        persons={persons}
        setPersons={setPersons}
        search={search}
        setMessage={setMessage}
        setIsError={setIsError}
      />
    </div>
  );
};

export default App;
