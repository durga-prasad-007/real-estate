import React from 'react';
import { FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa';

export default function PropertyCard({ property }) {
  return (
    <div className="card property-card h-100 shadow-sm">
      <img src={property.image} className="card-img-top" alt={property.title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{property.title}</h5>
        <p className="mb-1"><FaMapMarkerAlt /> {property.location}</p>
        <p className="text-primary fw-bold"><FaDollarSign /> {property.price.replace('$', '')}</p>
        <p className="card-text small mt-auto">{property.description}</p>
      </div>
    </div>
  );
}