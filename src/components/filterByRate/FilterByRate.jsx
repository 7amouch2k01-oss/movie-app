import './filterbyRate.css'

const FilterByRate = ({ onRatingChange, ratingFilter }) => {
  const handleChange = (e) => {
    onRatingChange(e.target.value)
  }

  return (
    <div className="filterbyrate">
      <div className="filterbyrate__title">Filter by Rating</div>

      <div className="filterbyrate__controls">
        <label className="filterbyrate__label" htmlFor="ratingFilter">
          <span className="filterbyrate__labelText">Rating</span>
        </label>

        <select
          id="ratingFilter"
          onChange={handleChange}
          value={ratingFilter}
          className="filterbyrate__select"
        >
          <option value="">All</option>
          <option value="1">1 ★</option>
          <option value="2">2 ★</option>
          <option value="3">3 ★</option>
          <option value="4">4 ★</option>
          <option value="5">5 ★</option>
        </select>

        <div className="filterbyrate__preview" aria-live="polite">
          {ratingFilter ? (
            <span>
              Showing <b>{ratingFilter}</b> star(s)
            </span>
          ) : (
            <span>Showing all ratings</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default FilterByRate;


