import React, { useState } from 'react';
import { AdminActionHeader } from '../../components/admin/AdminActionHeader';
import { AdminDataTable } from '../../components/admin/AdminDataTable';
import { Badge } from '../../components/common/Badge';
import { teamMembers } from '../../data/mockData';

export const AdminTeam = () => {
  const [search, setSearch] = useState('');

  const filtered = teamMembers.filter(m => m.name.toLowerCase().includes(search.toLowerCase()));

  const columns = [
    { header: 'Member Name', accessor: 'name' },
    { header: 'Role', cell: (r) => <Badge variant="primary">{r.role}</Badge> },
    { header: 'Section', accessor: 'section' },
    { header: 'Year & Branch', cell: (r) => `${r.year} (${r.branch})` }
  ];

  return (
    <div>
      <AdminActionHeader
        title="Manage Team Roster"
        subtitle="Add, edit, or organize core leads, web team members, and faculty advisors."
        addLabel="Add Team Member"
        onAdd={() => alert("Add Team Member Modal Placeholder")}
        searchValue={search}
        onSearchChange={setSearch}
      />

      <AdminDataTable
        columns={columns}
        data={filtered}
        onEdit={(row) => alert(`Edit team member: ${row.name}`)}
        onDelete={(row) => alert(`Delete team member: ${row.name}`)}
      />
    </div>
  );
};
