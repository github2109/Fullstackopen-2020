const Filter = ({setSearch}) => {
    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    }
    return (
        <div>
            filter shown with<input onChange={handleSearchChange} />
        </div>
    );
}

export default Filter;