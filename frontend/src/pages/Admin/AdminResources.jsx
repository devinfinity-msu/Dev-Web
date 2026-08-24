import React, { useState } from 'react';
import { AdminActionHeader } from '../../components/admin/AdminActionHeader';
import { AdminDataTable } from '../../components/admin/AdminDataTable';
import { Badge } from '../../components/common/Badge';
import { learningResources } from '../../data/mockData';

export const AdminResources = () => {
  const [search, setSearch] = useState('');

  const allItems = learningResources.flatMap(cat => cat.items.map(item => ({ ...item, categoryName: cat.category })));
  const filtered = allItems.filter(i => i.title.toLowerCase().includes(search.toLowerCase()));

  const columns = [
    { header: 'Resource Name', accessor: 'title' },
    { header: 'Category Section', accessor: 'categoryName' },
    { header: 'Type', accessor: 'type' },
    { header: 'Tag', cell: (r) => <Badge variant="primary">{r.tag}</Badge> }
  ];

  return (
    <div>
      <AdminActionHeader
        title="Manage Learning Resources"
        subtitle="Add roadmaps, workshop slide decks, tutorials, or developer tools."
        addLabel="Add Resource Link"
        onAdd={() => alert("Add Resource Modal Placeholder")}
        searchValue={search}
        onSearchChange={setSearch}
      />

      <AdminDataTable
        columns={columns}
        data={filtered}
        onEdit={(row) => alert(`Edit resource: ${row.title}`)}
        onDelete={(row) => alert(`Delete resource: ${row.title}`)}
      />
    </div>
  );
};
