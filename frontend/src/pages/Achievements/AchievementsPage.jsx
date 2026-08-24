import React, { useState } from 'react';
import { PageContainer } from '../../components/layout/PageContainer';
import { SectionTitle } from '../../components/common/SectionTitle';
import { AchievementFilters } from '../../components/achievements/AchievementFilters';
import { AchievementCard } from '../../components/achievements/AchievementCard';
import { EmptyState } from '../../components/common/EmptyState';
import { achievements } from '../../data/mockData';

export const AchievementsPage = () => {
  const [filter, setFilter] = useState('All');

  const filteredAchievements = achievements.filter((ach) => {
    if (filter === 'All') return true;
    return ach.type.includes(filter);
  });

  return (
    <PageContainer>
      <div className="container" style={{ paddingTop: '2rem' }}>
        <SectionTitle
          subtitle="Honors & Recognition"
          title="Celebrating What We"
          gradientText="Build."
          description="Recognizing hackathon victories, open-source milestones, coding accomplishments, and institutional awards achieved by Dev Infinity members."
        />

        <AchievementFilters activeFilter={filter} onFilterChange={setFilter} />

        <div style={{ margin: '2rem 0 5rem 0' }}>
          {filteredAchievements.length > 0 ? (
            <div className="grid-3">
              {filteredAchievements.map((ach) => (
                <AchievementCard key={ach.id} achievement={ach} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No Achievements Found"
              description={`No achievements recorded under "${filter}".`}
              actionText="Reset Filter"
              onAction={() => setFilter('All')}
            />
          )}
        </div>
      </div>
    </PageContainer>
  );
};
