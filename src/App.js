import React, { useState } from 'react';
import propertiesData from './data';
import Header from './components/Header';
import Sidebar from './components/sidebar';
import PropertyCard from './components/propertyCard';
import PropertyListItem from './components/propertyListltem';
import { FaTh, FaList } from 'react-icons/fa';

export default function App() {
  const [view, setView] = useState('grid'); // 'grid' or 'list'
  const [query, setQuery] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // simple price parser from strings like "$250,000"
  const parsePrice = (p) => Number(String(p).replace(/[^0-9.-]+/g, ''));

  const filtered = propertiesData.filter(prop => {
    const q = query.trim().toLowerCase();
    const matchesQuery = !q || prop.title.toLowerCase().includes(q) || prop.location.toLowerCase().includes(q);
    const price = parsePrice(prop.price);
    const matchesMin = !minPrice || price >= Number(minPrice);
    const matchesMax = !maxPrice || price <= Number(maxPrice);
    return matchesQuery && matchesMin && matchesMax;
  });

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Header />

      <div className="container-fluid mt-4">
        <div className="row">
          <aside className="col-lg-3 mb-3">
            <Sidebar query={query} setQuery={setQuery} minPrice={minPrice} setMinPrice={setMinPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice} />
          </aside>

          <main className="col-lg-9">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <h4 className="mb-0">Properties</h4>
                <small className="text-muted">Showing {filtered.length} properties</small>
              </div>

              <div className="btn-group" role="group" aria-label="view toggle">
                <button title="Grid" onClick={() => setView('grid')} className={`btn btn-sm ${view==='grid' ? 'btn-primary' : 'btn-outline-primary'}`}><FaTh /></button>
                <button title="List" onClick={() => setView('list')} className={`btn btn-sm ${view==='list' ? 'btn-primary' : 'btn-outline-primary'}`}><FaList /></button>
              </div>
            </div>

            {view === 'grid' ? (
              <div className="row g-3">
                {filtered.map(p => (
                  <div key={p.id} className="col-12 col-md-6 col-lg-4">
                    <PropertyCard property={p} />
                  </div>
                ))}
              </div>
            ) : (
              <div>
                {filtered.map(p => (
                  <PropertyListItem key={p.id} property={p} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="mt-auto py-3 bg-white text-center small">
        <div className="container">© {new Date().getFullYear()} RealEstate — Demo</div>
      </footer>
    </div>
  );
}