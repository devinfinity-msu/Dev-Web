import React from 'react';
import { Calendar, Code2, FileText, BookOpen, Trophy, Users, Award, MessageSquare, Plus } from 'lucide-react';
import { AdminStatsCard } from '../../components/admin/AdminStatsCard';
import { AdminActionHeader } from '../../components/admin/AdminActionHeader';
import { AdminDataTable } from '../../components/admin/AdminDataTable';
import { adminSummary, events, projects, blogs } from '../../data/mockData';

export const AdminDashboard = () => {
  const eventColumns = [
    { header: 'Title', accessor: 'title' },
    { header: 'Category', accessor: 'category' },
    { header: 'Date', accessor: 'date' },
    { header: 'Status', cell: (row) => <span style={{ color: row.status === 'Upcoming' ? 'var(--primary)' : 'var(--text-muted)', fontWeight: 600 }}>{row.status}</span> }
  ];

  return (
    <div>
      <AdminActionHeader
        title="Admin Control Dashboard"
        subtitle="Overview metrics & management center for Dev Infinity Web Application."
      />

      {/* Metric Cards Grid */}
      <div className="grid-4" style={{ marginBottom: '2.5rem' }}>
        <AdminStatsCard title="Total Events" value={adminSummary.totalEvents} change="+2 upcoming" icon={Calendar} color="var(--primary)" />
        <AdminStatsCard title="Active Projects" value={adminSummary.totalProjects} change="+4 this month" icon={Code2} color="var(--secondary)" />
        <AdminStatsCard title="Technical Blogs" value={adminSummary.totalBlogs} change="3 featured" icon={FileText} color="var(--accent)" />
        <AdminStatsCard title="Certificates Issued" value={adminSummary.certificatesGenerated} change="+12 recently" icon={Award} color="var(--success)" />
      </div>

      {/* Recent Tables Section */}
      <div className="grid-2">
        <div>
          <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-contrast)' }}>
            Recent Events Schedule
          </h3>
          <AdminDataTable
            columns={eventColumns}
            data={events.slice(0, 3)}
            onView={(row) => alert(`View event details for: ${row.title}`)}
            onEdit={(row) => alert(`Edit event placeholder: ${row.title}`)}
          />
        </div>

        <div>
          <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-contrast)' }}>
            Project Submissions
          </h3>
          <AdminDataTable
            columns={[
              { header: 'Project Name', accessor: 'title' },
              { header: 'Stack', cell: (row) => row.techStack.slice(0, 2).join(', ') },
              { header: 'Category', accessor: 'category' }
            ]}
            data={projects.slice(0, 3)}
            onView={(row) => alert(`View project details: ${row.title}`)}
            onEdit={(row) => alert(`Edit project placeholder: ${row.title}`)}
          />
        </div>
      </div>
    </div>
  );
};
