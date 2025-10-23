import React from 'react';

export default function Sidebar({ query, setQuery, minPrice, setMinPrice, maxPrice, setMaxPrice }) {
  return (
    <div className="p-3 sidebar bg-light h-100">
      <h6>Filters</h6>
      <div className="mb-3">
        <label className="form-label">Search</label>
        <input value={query} onChange={e => setQuery(e.target.value)} className="form-control" placeholder="Title or location" />
      </div>

      <div className="mb-3">
        <label className="form-label">Min Price (USD)</label>
        <input type="number" value={minPrice} onChange={e => setMinPrice(e.target.value)} className="form-control" />
      </div>

      <div className="mb-3">
        <label className="form-label">Max Price (USD)</label>
        <input type="number" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} className="form-control" />
      </div>

      <button className="btn btn-primary w-100">Apply</button>
    </div>
  );
}