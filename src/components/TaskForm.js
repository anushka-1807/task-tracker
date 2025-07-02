import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSubmit, editTask, onCancel }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  // Pre-populate form when editing
  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title);
      setDescription(editTask.description || '');
    } else {
      setTitle('');
      setDescription('');
    }
    setError('');
  }, [editTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim()) {
      setError('Task title is required');
      return;
    }

    const taskData = {
      title: title.trim(),
      description: description.trim(),
    };

    onSubmit(taskData);
    
    // Reset form if not editing
    if (!editTask) {
      setTitle('');
      setDescription('');
    }
    
    setError('');
  };

  const handleCancel = () => {
    setTitle('');
    setDescription('');
    setError('');
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <div className="task-form-container">
      <form onSubmit={handleSubmit} className="task-form">
        <h3>{editTask ? 'Edit Task' : 'Add New Task'}</h3>
        
        <div className="form-group">
          <label htmlFor="task-title">Title *</label>
          <input
            type="text"
            id="task-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
            className={error ? 'error' : ''}
            autoFocus={!editTask}
          />
          {error && <span className="error-message">{error}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="task-description">Description</label>
          <textarea
            id="task-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description (optional)"
            rows="3"
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">
            {editTask ? 'Update Task' : 'Add Task'}
          </button>
          
          {editTask && (
            <button type="button" onClick={handleCancel} className="cancel-btn">
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default TaskForm; 