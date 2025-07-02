import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleComplete, onEdit, onDelete, currentFilter }) => {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">
          {currentFilter === 'all' && '📝'}
          {currentFilter === 'pending' && '⏳'}
          {currentFilter === 'completed' && '✅'}
        </div>
        <h3>No {currentFilter === 'all' ? '' : currentFilter} tasks</h3>
        <p>
          {currentFilter === 'all' && "You haven't created any tasks yet. Add your first task above!"}
          {currentFilter === 'pending' && "No pending tasks! You're all caught up! 🎉"}
          {currentFilter === 'completed' && "No completed tasks yet. Start completing some tasks!"}
        </p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList; 