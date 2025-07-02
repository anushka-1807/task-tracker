import React, { useState } from 'react';

const TaskItem = ({ task, onToggleComplete, onEdit, onDelete }) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const handleDelete = () => {
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    onDelete(task.id);
    setShowDeleteConfirm(false);
  };

  const cancelDelete = () => {
    setShowDeleteConfirm(false);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : 'pending'}`}>
      <div className="task-content">
        <div className="task-header">
          <div className="task-checkbox">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleComplete(task.id)}
              id={`task-${task.id}`}
            />
            <label htmlFor={`task-${task.id}`} className="checkbox-label">
              <span className="checkmark"></span>
            </label>
          </div>
          
          <div className="task-info">
            <h4 className={`task-title ${task.completed ? 'completed-text' : ''}`}>
              {task.title}
            </h4>
            
            {task.description && (
              <p className={`task-description ${task.completed ? 'completed-text' : ''}`}>
                {task.description}
              </p>
            )}
            
            <div className="task-meta">
              <span className="task-date">
                Created: {formatDate(task.createdAt)}
              </span>
              <span className={`task-status ${task.completed ? 'status-completed' : 'status-pending'}`}>
                {task.completed ? '✅ Completed' : '⏳ Pending'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="task-actions">
        <button 
          onClick={() => onEdit(task)} 
          className="edit-btn"
          title="Edit task"
        >
          ✏️
        </button>
        
        <button 
          onClick={handleDelete} 
          className="delete-btn"
          title="Delete task"
        >
          🗑️
        </button>
      </div>

      {showDeleteConfirm && (
        <div className="delete-confirm">
          <p>Are you sure you want to delete this task?</p>
          <div className="confirm-actions">
            <button onClick={confirmDelete} className="confirm-btn">
              Yes, Delete
            </button>
            <button onClick={cancelDelete} className="cancel-btn">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskItem; 