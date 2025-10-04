'use client';

import React, { useState } from 'react';
import styles from './BlogFilters.module.css';

interface BlogFiltersProps {
  onFilterChange: (filter: string) => void;
}

const BlogFilters: React.FC<BlogFiltersProps> = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filters = [
    'Todos',
    'Gestión de personas',
    'Información legal',
    'Salud y seguridad',
    'Tecnología',
    'Eventos'
  ];

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filtersBar}>
        {filters.map((filter) => (
          <button
            key={filter}
            className={`${styles.filterButton} ${
              activeFilter === filter ? styles.active : ''
            }`}
            onClick={() => handleFilterClick(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogFilters;
