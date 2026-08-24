import React from 'react';
import { PageContainer } from '../../components/layout/PageContainer';
import { SectionTitle } from '../../components/common/SectionTitle';
import { TeamSection } from '../../components/team/TeamSection';
import { teamMembers } from '../../data/mockData';

export const TeamPage = () => {
  const facultyMembers = teamMembers.filter(m => m.section === 'Faculty Coordinator');
  const coreTeam = teamMembers.filter(m => m.section === 'Core Team');
  const webTeam = teamMembers.filter(m => m.section === 'Web Team');

  return (
    <PageContainer>
      <div className="container" style={{ paddingTop: '2rem' }}>
        <SectionTitle
          subtitle="Club Roster"
          title="The People Behind"
          gradientText="Dev Infinity."
          description="Meet the faculty advisors, core leads, and student web developers driving our club's vision at CSE, FTE, MSU Baroda."
        />

        <TeamSection
          title="Faculty Coordinator"
          description="Institutional advisor providing academic guidance and club support."
          members={facultyMembers}
        />

        <TeamSection
          title="Core Team Leads"
          description="Executive officers managing club operations, hackathons, and student workshops."
          members={coreTeam}
        />

        <TeamSection
          title="Web Engineering Team"
          description="Student developers designing and maintaining the official club platforms & project repositories."
          members={webTeam}
        />
      </div>
    </PageContainer>
  );
};
