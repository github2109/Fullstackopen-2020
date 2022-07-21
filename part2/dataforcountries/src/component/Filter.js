const Filter = ({ setSearch }) => {
  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div>
      find countries
      <input onChange={handleChangeSearch} />
    </div>
  );
};

export default Filter;
