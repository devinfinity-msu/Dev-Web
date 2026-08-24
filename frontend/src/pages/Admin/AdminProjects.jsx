import React, { useState } from 'react';
import { AdminActionHeader } from '../../components/admin/AdminActionHeader';
import { AdminDataTable } from '../../components/admin/AdminDataTable';
import { Badge } from '../../components/common/Badge';
import { projects } from '../../data/mockData';

export const AdminProjects = () => {
  const [search, setSearch] = useState('');

  const filteredProjects = projects.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));

  const columns = [
    { header: 'Project Name', accessor: 'title' },
    { header: 'Category', cell: (r) => <Badge variant="primary">{r.category}</Badge> },
    { header: 'Tech Stack', cell: (r) => r.techStack.join(', ') },
    { header: 'Contributors', cell: (r) => r.contributors.join(', ') }
  ];

  return (
    <div>
      <AdminActionHeader
        title="Manage Student Projects"
        subtitle="Review, approve, edit, or feature web projects submitted by club members."
        addLabel="Add Showcase Project"
        onAdd={() => alert("Open Add Project Form Modal Placeholder")}
        searchValue={search}
        onSearchChange={setSearch}
      />

      <AdminDataTable
        columns={columns}
        data={filteredProjects}
        onEdit={(row) => alert(`Edit project: ${row.title}`)}
        onDelete={(row) => alert(`Delete project placeholder: ${row.title}`)}
      />
    </div>
  );
};
