import "../styles/FilterBar.css";

function FilterBar({ filters, setFilters }) {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setFilters({ category: "", brand: "", min: "", max: "" });
  };

  return (
    <div className="filter-bar">
      <select name="category" value={filters.category} onChange={handleChange}>
        <option value="">All Categories</option>
        <option value="Phones">Phones</option>
        <option value="Laptops">Laptops</option>
        <option value="Accessories">Accessories</option>
      </select>

      <select name="brand" value={filters.brand} onChange={handleChange}>
        <option value="">All Brands</option>
        <option value="Apple">Apple</option>
        <option value="Samsung">Samsung</option>
        <option value="Dell">Dell</option>
      </select>

      <input
        name="min"
        type="number"
        placeholder="Min Price"
        value={filters.min}
        onChange={handleChange}
      />
      <input
        name="max"
        type="number"
        placeholder="Max Price"
        value={filters.max}
        onChange={handleChange}
      />

      <button className="reset-btn" onClick={handleReset}>Reset Filters</button>
    </div>
  );
}

export default FilterBar;
