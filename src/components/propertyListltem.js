import React from 'react';
import { FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa';

export default function PropertyListItem({ property }) {
  return (
    <div className="d-flex property-list-item p-3 mb-3 bg-white shadow-sm rounded">
      <img src={property.image} alt={property.title} style={{width:160, height:100, objectFit:'cover'}} className="me-3 rounded" />
      <div className="flex-grow-1">
        <h5>{property.title}</h5>
        <p className="mb-1 small text-muted"><FaMapMarkerAlt /> {property.location}</p>
        <p className="mb-2">{property.description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="fw-bold"><FaDollarSign /> {property.price.replace('$','')}</div>
          <button className="btn btn-outline-primary btn-sm">View</button>
        </div>
      </div>
    </div>
  );
}