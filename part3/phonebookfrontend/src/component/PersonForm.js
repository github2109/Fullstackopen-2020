import personService from "../services/persons";
const PersonForm = ({
  persons,
  setPersons,
  newPerson,
  setNewPerson,
  setMessage,
  setIsError,
}) => {
  const handlePersonNameChange = (event) => {
    const newPersonObj = {
      ...newPerson,
      name: event.target.value,
    };
    setNewPerson(newPersonObj);
  };
  const handlePersonNumberChange = (event) => {
    const newPersonObj = {
      ...newPerson,
      number: event.target.value,
    };
    setNewPerson(newPersonObj);
  };
  const addNewPerson = (event) => {
    event.preventDefault();
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newPerson.name) {
        if (
          !window.confirm(
            `${newPerson.name} is already added to phonebook, replace the old number with a new one?`
          )
        ) {
          return;
        }
        personService
          .update(persons[i].id, newPerson)
          .then((personResponse) => {
            setPersons(
              persons.map((person) =>
                person.id !== persons[i].id ? person : personResponse
              )
            );
            setMessage(`Updated ${newPerson.name}`);
            setIsError(false);
            setTimeout(() => {
              setMessage(null);
            }, 3000);
          }).catch(error => {
            setMessage(error.response.data.error);
            setIsError(true);
            setTimeout(() => {
              setMessage(null)
            }, 3000)
          });
        return;
      }
    }
    personService
      .create(newPerson)
      .then((personResponse) => {
        setPersons(persons.concat(personResponse));
        setMessage(`Added ${newPerson.name}`);
        setIsError(false);
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      })
      .catch((error) => {
        setMessage(error.response.data.error);
        setIsError(true);
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      });
  };
  return (
    <form onSubmit={addNewPerson}>
      <div>
        name: <input onChange={handlePersonNameChange} />
      </div>
      <div>
        number: <input onChange={handlePersonNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
