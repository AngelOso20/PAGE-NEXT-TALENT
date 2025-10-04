'use client';

import React, { useState } from 'react';
import BlogFilters from './BlogFilters';
import BlogCards from './BlogCards';

const BlogSection: React.FC = () => {
  const [currentFilter, setCurrentFilter] = useState('Todos');

  const handleFilterChange = (filter: string) => {
    setCurrentFilter(filter);
  };

  return (
    <section>
      <BlogFilters onFilterChange={handleFilterChange} />
      <BlogCards currentFilter={currentFilter} />
    </section>
  );
};

export default BlogSection;
