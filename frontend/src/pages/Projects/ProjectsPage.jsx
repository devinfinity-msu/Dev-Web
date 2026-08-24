import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { PageContainer } from '../../components/layout/PageContainer';
import { SectionTitle } from '../../components/common/SectionTitle';
import { ProjectFilters } from '../../components/projects/ProjectFilters';
import { ProjectCard } from '../../components/projects/ProjectCard';
import { SubmitProjectModal } from '../../components/projects/SubmitProjectModal';
import { Button } from '../../components/common/Button';
import { EmptyState } from '../../components/common/EmptyState';
import { projects } from '../../data/mockData';

export const ProjectsPage = () => {
  const [filter, setFilter] = useState('All');
  const [modalOpen, setModalOpen] = useState(false);

  const filteredProjects = projects.filter((proj) => {
    if (filter === 'All') return true;
    return proj.category === filter;
  });

  return (
    <PageContainer>
      <div className="container" style={{ paddingTop: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <SectionTitle
            subtitle="Student Project Showcase"
            title="Ideas Built Into"
            gradientText="Reality."
            description="Explore open-source web platforms, university tools, and student innovations engineered by Dev Infinity members."
          />

          <Button variant="primary" size="lg" onClick={() => setModalOpen(true)} style={{ marginTop: '0.5rem' }}>
            <Plus size={18} />
            <span>Submit Your Project</span>
          </Button>
        </div>

        {/* Category Filters */}
        <ProjectFilters activeFilter={filter} onFilterChange={setFilter} />

        {/* Projects Grid */}
        <div style={{ margin: '2rem 0 5rem 0' }}>
          {filteredProjects.length > 0 ? (
            <div className="grid-2">
              {filteredProjects.map((proj) => (
                <ProjectCard key={proj.id} project={proj} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No Projects Found"
              description={`No student projects match the "${filter}" filter.`}
              actionText="Reset Filter"
              onAction={() => setFilter('All')}
            />
          )}
        </div>

        {/* Submission Modal */}
        <SubmitProjectModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </PageContainer>
  );
};
