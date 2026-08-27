import React, { useState, useMemo, useRef } from 'react';
import { Plus, Search, X } from 'lucide-react';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { StarfieldBackground } from '../../components/projects/StarfieldBackground';
import { ProjectFilters } from '../../components/projects/ProjectFilters';
import { ProjectCard } from '../../components/projects/ProjectCard';
import { SubmitProjectModal } from '../../components/projects/SubmitProjectModal';
import { ProjectDetailsView } from '../../components/projects/ProjectDetailsModal';
import { Button } from '../../components/common/Button';
import { EmptyState } from '../../components/common/EmptyState';
import { projects } from '../../data/mockData';
import '../../styles/projects.css';

export const ProjectsPage = () => {
  const [projectList, setProjectList] = useState(projects);
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [submitModalOpen, setSubmitModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const lastSelectedIdRef = useRef(null);

  const handleProjectSubmit = (newProject) => {
    setProjectList((prev) => [newProject, ...prev]);
  };

  const filteredProjects = useMemo(() => {
    return projectList.filter((proj) => {
      // 1. Category filter
      if (filter !== 'All' && proj.category !== filter) {
        return false;
      }

      // 2. Search query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = proj.title?.toLowerCase().includes(query) ?? false;
        const matchesDesc = proj.description?.toLowerCase().includes(query) ?? false;
        const matchesCategory = proj.category?.toLowerCase().includes(query) ?? false;
        const matchesTech = proj.techStack?.some(tech => tech.toLowerCase().includes(query)) ?? false;
        const matchesContributors = proj.contributors?.some(contributor => contributor.toLowerCase().includes(query)) ?? false;

        if (!matchesTitle && !matchesDesc && !matchesCategory && !matchesTech && !matchesContributors) {
          return false;
        }
      }

      return true;
    });
  }, [projectList, filter, searchQuery]);

  const handleClearSearch = () => {
    setSearchQuery('');
    setFilter('All');
  };

  const handleSelectProject = (proj) => {
    lastSelectedIdRef.current = proj.id;
    setSelectedProject(proj);
  };

  const handleBackToGrid = () => {
    const targetId = lastSelectedIdRef.current;
    setSelectedProject(null);

    // Smooth scroll back and restore focus to selected card
    setTimeout(() => {
      if (targetId) {
        const elem = document.querySelector(`[data-project-id="${targetId}"]`);
        if (elem) {
          elem.focus();
        }
      }
    }, 100);
  };

  return (
    <div className="projects-page">
      <StarfieldBackground
        mode={selectedProject ? 'project' : 'default'}
        selectedProject={selectedProject}
      />
      <Navbar />

      <main className="projects-content container">
        {selectedProject ? (
          <ProjectDetailsView
            project={selectedProject}
            onBack={handleBackToGrid}
          />
        ) : (
          <>
            {/* ── Hero Header ───────────────────────────────────────── */}
            <div className="projects-header">
              <div className="projects-hero-header">
                <div className="projects-eyebrow animate-slide-right">
                  <span className="eyebrow-line"></span>
                  // DESIGNED. DEVELOPED. DEPLOYED.
                </div>

                <h1 className="projects-hero-heading animate-hero-title">
                  WHERE IDEAS <span className="projects-hero-go-live">Go Live.</span>
                </h1>

                <p className="projects-hero-desc animate-hero-desc">
                  Explore web experiences created by Dev Infinity members—from responsive interfaces and powerful APIs to complete full-stack platforms.
                </p>

                <div className="projects-hero-pills animate-hero-pills">
                  <span className="projects-hero-pill">Built by Students</span>
                  <span className="projects-hero-pill">Shipped to Inspire</span>
                  <span className="projects-hero-pill projects-hero-pill--accent">
                    {projectList.length} Projects Live
                  </span>
                </div>
              </div>

              <div className="projects-hero-cta animate-hero-cta">
                <Button variant="primary" size="lg" onClick={() => setSubmitModalOpen(true)}>
                  <Plus size={18} />
                  <span>Submit Your Project</span>
                </Button>
              </div>
            </div>

            {/* Glass Toolbar */}
            <div className="projects-toolbar animate-toolbar-enter">
              <div className="projects-search">
                <Search size={16} className="projects-search__icon" />
                <input
                  type="text"
                  className="projects-search__input"
                  placeholder="Search projects, tech stack..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button className="projects-search__clear" onClick={() => setSearchQuery('')} aria-label="Clear search">
                    <X size={14} />
                  </button>
                )}
              </div>

              <div className="projects-toolbar__filters">
                <ProjectFilters activeFilter={filter} onFilterChange={setFilter} />
              </div>

              <div className="projects-results-count">
                <span className="projects-results-count__number">{filteredProjects.length}</span>
                {filteredProjects.length === 1 ? ' project found' : ' projects found'}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="projects-grid-container">
              {filteredProjects.length > 0 ? (
                <div className="projects-grid">
                  {filteredProjects.map((proj, index) => (
                    <div key={proj.id} data-project-id={proj.id} tabIndex={-1} style={{ outline: 'none' }}>
                      <ProjectCard
                        project={proj}
                        index={index}
                        onClick={handleSelectProject}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="projects-empty-state">
                  <EmptyState
                    title="No Projects Found"
                    description="We couldn't find any projects matching your criteria."
                    actionText="Clear Filters"
                    onAction={handleClearSearch}
                  />
                </div>
              )}
            </div>
          </>
        )}

        {/* Submit Project Form Modal */}
        <SubmitProjectModal
          isOpen={submitModalOpen}
          onClose={() => setSubmitModalOpen(false)}
          onSubmitProject={handleProjectSubmit}
        />
      </main>

      <Footer />
    </div>
  );
};
