import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { PageContainer } from '../../components/layout/PageContainer';
import { SectionTitle } from '../../components/common/SectionTitle';
import { ResourceCategory } from '../../components/learning/ResourceCategory';
import { EmptyState } from '../../components/common/EmptyState';
import { learningResources } from '../../data/mockData';

export const LearningHubPage = () => {
  const [search, setSearch] = useState('');

  const filteredCategories = learningResources.map((cat) => {
    if (!search) return cat;
    const matchingItems = cat.items.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.tag.toLowerCase().includes(search.toLowerCase())
    );
    return { ...cat, items: matchingItems };
  }).filter((cat) => cat.items.length > 0);

  return (
    <PageContainer>
      <div className="container" style={{ paddingTop: '2rem' }}>
        <SectionTitle
          subtitle="Curated Learning Vault"
          title="Your Path to"
          gradientText="Better Web Skills."
          description="Access developer roadmaps, workshop slide decks, clean code cheatsheets, and essential web documentation."
        />

        {/* Search Bar */}
        <div style={{ position: 'relative', maxWidth: '540px', marginBottom: '3rem' }}>
          <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="Search resources by technology (React, Node, Git, CSS)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-input"
            style={{ paddingLeft: '2.75rem', borderRadius: 'var(--radius-full)' }}
          />
        </div>

        {/* Learning Resource Categories */}
        {filteredCategories.length > 0 ? (
          filteredCategories.map((cat) => (
            <ResourceCategory key={cat.id} category={cat} />
          ))
        ) : (
          <EmptyState
            title="No Resources Found"
            description={`No learning resources match "${search}".`}
            actionText="Clear Search"
            onAction={() => setSearch('')}
          />
        )}
      </div>
    </PageContainer>
  );
};
