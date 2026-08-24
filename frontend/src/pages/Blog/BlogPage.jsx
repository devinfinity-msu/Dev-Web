import React, { useState } from 'react';
import { PageContainer } from '../../components/layout/PageContainer';
import { SectionTitle } from '../../components/common/SectionTitle';
import { FeaturedBlog } from '../../components/blog/FeaturedBlog';
import { BlogFilters } from '../../components/blog/BlogFilters';
import { BlogCard } from '../../components/blog/BlogCard';
import { EmptyState } from '../../components/common/EmptyState';
import { blogs } from '../../data/mockData';

export const BlogPage = () => {
  const [category, setCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredPost = blogs.find(b => b.featured) || blogs[0];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory = category === 'All' || blog.category === category;
    const matchesSearch = searchQuery === '' || 
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <PageContainer>
      <div className="container" style={{ paddingTop: '2rem' }}>
        <SectionTitle
          subtitle="Technical Articles & Tutorials"
          title="Think. Learn."
          gradientText="Share."
          description="Read engineering insights, web development best practices, and architecture tutorials authored by Dev Infinity mentors."
        />

        {/* Featured Post Spotlight */}
        {!searchQuery && category === 'All' && (
          <FeaturedBlog blog={featuredPost} />
        )}

        {/* Search & Filter Bar */}
        <BlogFilters
          activeCategory={category}
          onCategoryChange={setCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* Articles Grid */}
        <div style={{ margin: '2rem 0 5rem 0' }}>
          {filteredBlogs.length > 0 ? (
            <div className="grid-3">
              {filteredBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No Articles Found"
              description="No blog posts match your current search query or category filter."
              actionText="Clear Filters"
              onAction={() => {
                setCategory('All');
                setSearchQuery('');
              }}
            />
          )}
        </div>
      </div>
    </PageContainer>
  );
};
