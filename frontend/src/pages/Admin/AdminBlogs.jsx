import React, { useState } from 'react';
import { AdminActionHeader } from '../../components/admin/AdminActionHeader';
import { AdminDataTable } from '../../components/admin/AdminDataTable';
import { Badge } from '../../components/common/Badge';
import { blogs } from '../../data/mockData';

export const AdminBlogs = () => {
  const [search, setSearch] = useState('');

  const filteredBlogs = blogs.filter(b => b.title.toLowerCase().includes(search.toLowerCase()));

  const columns = [
    { header: 'Article Title', accessor: 'title' },
    { header: 'Category', cell: (r) => <Badge variant="secondary">{r.category}</Badge> },
    { header: 'Author', cell: (r) => r.author.name },
    { header: 'Published Date', accessor: 'publishedDate' },
    { header: 'Featured', cell: (r) => r.featured ? <Badge variant="accent">Featured</Badge> : <span style={{ color: 'var(--text-muted)' }}>Standard</span> }
  ];

  return (
    <div>
      <AdminActionHeader
        title="Manage Technical Blogs"
        subtitle="Write, edit, publish, or feature technical articles."
        addLabel="Create New Post"
        onAdd={() => alert("Open Blog Post Editor Modal Placeholder")}
        searchValue={search}
        onSearchChange={setSearch}
      />

      <AdminDataTable
        columns={columns}
        data={filteredBlogs}
        onEdit={(row) => alert(`Edit post: ${row.title}`)}
        onDelete={(row) => alert(`Delete post placeholder: ${row.title}`)}
      />
    </div>
  );
};
