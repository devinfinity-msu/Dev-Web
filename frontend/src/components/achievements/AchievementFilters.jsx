import React from 'react';

export const AchievementFilters = ({ activeFilter, onFilterChange }) => {
  const categories = ['All', 'Club Milestone', 'Member Win'];

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
