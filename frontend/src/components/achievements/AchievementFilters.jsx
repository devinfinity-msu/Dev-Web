


import React from 'react';
import {
  Layers3,
  Sparkles,
  UserRound,
} from 'lucide-react';

const categories = [
  {
    value: 'All',
    label: 'All',
    icon: Sparkles,
  },
  {
    value: 'Club Milestone',
    label: 'Club',
    icon: Layers3,
  },
  {
    value: 'Member Win',
    label: 'Members',
    icon: UserRound,
  },
];

export const AchievementFilters = ({
  activeFilter,
  onFilterChange,
}) => {
  return (
    <div
      className="achievement-filter-container"
      aria-label="Achievement filters"
    >
      <div
        className="achievement-filters"
        role="tablist"
        aria-label="Achievement categories"
      >
        {categories.map((category) => {
          const Icon = category.icon;
          const active =
            activeFilter === category.value;

          return (
            <button
              key={category.value}
              type="button"
              role="tab"
              aria-selected={active}
              className={`achievement-filter ${
                active ? 'active' : ''
              }`}
              onClick={() =>
                onFilterChange(category.value)
              }
            >
              <span className="filter-icon">
                <Icon size={16} strokeWidth={1.8} />
              </span>

              <span className="filter-label">
                {category.label}
              </span>

              <span className="filter-active-dot" />
            </button>
          );
        })}
      </div>
    </div>
  );
};