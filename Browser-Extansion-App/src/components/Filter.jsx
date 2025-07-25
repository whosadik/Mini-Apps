import './Filters.css';

function Filter({ setFilter }) {
  return (
    <div className='container'>
      <div className="filter">
        <h1 className="cards-heading">Extensions List</h1>
        <div className="filters">
          <button onClick={() => setFilter('all')} className="filter-btn">All</button>
          <button onClick={() => setFilter('active')} className="filter-btn">Active</button>
          <button onClick={() => setFilter('inactive')} className="filter-btn">Inactive</button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
