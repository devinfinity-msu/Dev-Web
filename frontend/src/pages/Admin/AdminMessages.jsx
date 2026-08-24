import React, { useState } from 'react';
import { AdminActionHeader } from '../../components/admin/AdminActionHeader';
import { AdminDataTable } from '../../components/admin/AdminDataTable';
import { Badge } from '../../components/common/Badge';

export const AdminMessages = () => {
  const [search, setSearch] = useState('');

  const mockMessages = [
    { id: 'msg-1', name: 'Aarav Patel', email: 'aarav@msubaroda.ac.in', enquiryType: 'Project Collaboration', message: 'Interested in contributing to student portal API...', date: 'Today, 2:30 PM', status: 'Unread' },
    { id: 'msg-2', name: 'Devanshi Mehta', email: 'devanshi@gmail.com', enquiryType: 'Workshop Registration', message: 'Will certificates be provided for the React Bootcamp?', date: 'Yesterday', status: 'Replied' },
    { id: 'msg-3', name: 'Alumni Sponsor', email: 'sponsor@techcorp.com', enquiryType: 'Sponsorship / Speaker', message: 'Would love to mentor the upcoming DevHack hackathon.', date: 'Aug 20, 2026', status: 'Unread' }
  ];

  const filtered = mockMessages.filter(m => m.name.toLowerCase().includes(search.toLowerCase()) || m.message.toLowerCase().includes(search.toLowerCase()));

  const columns = [
    { header: 'Sender Name', accessor: 'name' },
    { header: 'Email', accessor: 'email' },
    { header: 'Enquiry Type', cell: (r) => <Badge variant="primary">{r.enquiryType}</Badge> },
    { header: 'Message Snippet', accessor: 'message' },
    { header: 'Received', accessor: 'date' },
    { header: 'Status', cell: (r) => <Badge variant={r.status === 'Unread' ? 'warning' : 'success'}>{r.status}</Badge> }
  ];

  return (
    <div>
      <AdminActionHeader
        title="Contact Form Messages Inbox"
        subtitle="View and respond to incoming user enquiries submitted through the Contact Us page."
        searchValue={search}
        onSearchChange={setSearch}
      />

      <AdminDataTable
        columns={columns}
        data={filtered}
        onView={(row) => alert(`View full message from ${row.name}:\n\n"${row.message}"`)}
        onDelete={(row) => alert(`Delete message placeholder: ${row.name}`)}
      />
    </div>
  );
};
