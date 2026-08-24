import React, { useState } from 'react';
import { AdminActionHeader } from '../../components/admin/AdminActionHeader';
import { AdminDataTable } from '../../components/admin/AdminDataTable';
import { Badge } from '../../components/common/Badge';
import { achievements } from '../../data/mockData';

export const AdminAchievements = () => {
  const [search, setSearch] = useState('');

  const filtered = achievements.filter(a => a.title.toLowerCase().includes(search.toLowerCase()));

  const columns = [
    { header: 'Achievement Title', accessor: 'title' },
    { header: 'Type', cell: (r) => <Badge variant="success">{r.type}</Badge> },
    { header: 'Members / Team', accessor: 'members' },
    { header: 'Date Accomplished', accessor: 'date' }
  ];

  return (
    <div>
      <AdminActionHeader
        title="Manage Achievements & Wins"
        subtitle="Add hackathon trophies, open-source awards, or club milestone records."
        addLabel="Add Achievement"
        onAdd={() => alert("Add Achievement Modal Placeholder")}
        searchValue={search}
        onSearchChange={setSearch}
      />

      <AdminDataTable
        columns={columns}
        data={filtered}
        onEdit={(row) => alert(`Edit achievement: ${row.title}`)}
        onDelete={(row) => alert(`Delete achievement: ${row.title}`)}
      />
    </div>
  );
};
