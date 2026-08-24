import React from 'react';
import { Search } from 'lucide-react';

export const BlogFilters = ({ activeCategory, onCategoryChange, searchQuery, onSearchChange }) => {
  const categories = ['All', 'Frontend', 'Backend', 'Full-Stack', 'UI/UX'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
      {/* Search Input Bar */}
      <div style={{ position: 'relative', maxWidth: '480px' }}>
        <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
        <input
          type="text"
          placeholder="Search technical articles by title or keyword..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="form-input"
          style={{ paddingLeft: '2.75rem', borderRadius: 'var(--radius-full)' }}
        />
      </div>

      {/* Category Pills */}
      <div className="filter-bar" style={{ marginBottom: 0 }}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => onCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};
