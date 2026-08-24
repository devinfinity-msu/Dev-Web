import React, { useState } from 'react';
import { AdminActionHeader } from '../../components/admin/AdminActionHeader';
import { AdminDataTable } from '../../components/admin/AdminDataTable';
import { Badge } from '../../components/common/Badge';
import { events } from '../../data/mockData';

export const AdminEvents = () => {
  const [search, setSearch] = useState('');

  const filteredEvents = events.filter(e => e.title.toLowerCase().includes(search.toLowerCase()));

  const columns = [
    { header: 'Event Title', accessor: 'title' },
    { header: 'Category', cell: (r) => <Badge variant="primary">{r.category}</Badge> },
    { header: 'Type', cell: (r) => <Badge variant="secondary">{r.type}</Badge> },
    { header: 'Date & Time', cell: (r) => `${r.date} (${r.time})` },
    { header: 'Venue', accessor: 'venue' },
    { header: 'Status', cell: (r) => <span style={{ fontWeight: 700, color: r.status === 'Upcoming' ? 'var(--primary)' : 'var(--text-muted)' }}>{r.status}</span> }
  ];

  return (
    <div>
      <AdminActionHeader
        title="Manage Events & Workshops"
        subtitle="Create, schedule, edit, or archive club events."
        addLabel="Create New Event"
        onAdd={() => alert("Open Create Event Form Modal Placeholder")}
        searchValue={search}
        onSearchChange={setSearch}
      />

      <AdminDataTable
        columns={columns}
        data={filteredEvents}
        onEdit={(row) => alert(`Edit event: ${row.title}`)}
        onDelete={(row) => alert(`Delete event placeholder: ${row.title}`)}
      />
    </div>
  );
};
