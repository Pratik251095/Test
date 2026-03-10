import './FilterBar.css';

export default function FilterBar() {
  return (
    <div className="filter-bar">
      <h2 className="filter-bar__title">Retainer Data</h2>

      <div className="filter-bar__controls">
        <div className="filter-bar__dropdown filter-bar__dropdown--brands">
          <span>Filter by Brands</span>
          <span className="material-symbols-outlined">expand_more</span>
        </div>

        <span className="filter-bar__or">Or</span>

        <div className="filter-bar__dropdown filter-bar__dropdown--manager">
          <span>Filter by Customer success manager</span>
          <span className="material-symbols-outlined">expand_more</span>
        </div>

        <div className="filter-bar__separator" />

        <div className="filter-bar__date-picker">
          <span className="material-symbols-outlined">calendar_today</span>
          <span>Jul 17, 2025 - July 31, 2025</span>
        </div>
      </div>
    </div>
  );
}
