import React from 'react';

export const ProjectFilters = ({ activeFilter, onFilterChange }) => {
  const categories = ['All', 'Frontend', 'Backend', 'Full-Stack', 'UI/UX'];

  return (
    <div className="filter-bar">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
          onClick={() => onFilterChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};
