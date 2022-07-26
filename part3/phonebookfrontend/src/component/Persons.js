import personService from "../services/persons";
const Number = ({ person, onClick }) => {
  return (
    <div>
      {person.name} {person.number} <button onClick={onClick}>delete</button>
    </div>
  );
};
const Persons = ({ persons, setPersons, search, setMessage, setIsError }) => {
  const searchPerson = persons.filter((person) => person.name.includes(search));
  const handleClick = (id, name) => {
    if (!window.confirm(`Delete ${name} ?`)) return;
    personService.remove(id).then(() => {
      setPersons(persons.filter((person) => person.id !== id));
      setMessage(`Deleted ${name}`);
      setIsError(false);
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    });
  };
  return (
    <div>
      {searchPerson.map((person) => (
        <Number
          key={person.id}
          person={person}
          setPersons={setPersons}
          onClick={() => handleClick(person.id, person.name)}
        />
      ))}
    </div>
  );
};

export default Persons;
