
const FilterByTitle = ({ searchTerm, setSearchTerm, onFilter }) => {
    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onFilter(value);
    }

  return (
    <div>
        <input type="text" placeholder="Search by title..." className="form-control" value={searchTerm} onChange={handleChange} />
    </div>
  )
}

export default FilterByTitle
