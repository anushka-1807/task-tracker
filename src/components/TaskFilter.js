import React from 'react';

const TaskFilter = ({ currentFilter, onFilterChange, taskCounts }) => {
  const filters = [
    { key: 'all', label: 'All', icon: '📋' },
    { key: 'pending', label: 'Pending', icon: '⏳' },
    { key: 'completed', label: 'Completed', icon: '✅' }
  ];

  return (
    <div className="task-filter">
      <div className="filter-tabs">
        {filters.map(filter => (
          <button
            key={filter.key}
            onClick={() => onFilterChange(filter.key)}
            className={`filter-tab ${currentFilter === filter.key ? 'active' : ''}`}
          >
            <span className="filter-icon">{filter.icon}</span>
            <span className="filter-label">{filter.label}</span>
            <span className="filter-count">
              ({taskCounts[filter.key] || 0})
            </span>
          </button>
        ))}
      </div>
      
      <div className="filter-summary">
        <p>
          Showing <strong>{taskCounts[currentFilter] || 0}</strong> 
          {' '}
          {currentFilter === 'all' ? 'tasks' : `${currentFilter} tasks`}
        </p>
      </div>
    </div>
  );
};

export default TaskFilter; 