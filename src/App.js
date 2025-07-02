import React, { useState, useEffect, useMemo } from 'react';
import Login from './components/Login';
import TaskForm from './components/TaskForm';
import TaskFilter from './components/TaskFilter';
import TaskList from './components/TaskList';
import { loadUser, loadTasks, saveTasks, clearUser, loadTheme, saveTheme } from './utils/localStorage';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [editingTask, setEditingTask] = useState(null);
  const [theme, setTheme] = useState('light');

  // Load user, tasks, and theme on app start
  useEffect(() => {
    const savedUser = loadUser();
    const savedTasks = loadTasks();
    const savedTheme = loadTheme();
    
    if (savedUser) {
      setCurrentUser(savedUser);
    }
    
    setTasks(savedTasks);
    setTheme(savedTheme);
  }, []);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  // Generate unique ID for new tasks
  const generateId = () => {
    return Date.now() + Math.random().toString(36).substr(2, 9);
  };

  // Filter tasks based on current filter
  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'completed':
        return tasks.filter(task => task.completed);
      case 'pending':
        return tasks.filter(task => !task.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  // Calculate task counts for filter display
  const taskCounts = useMemo(() => {
    return {
      all: tasks.length,
      completed: tasks.filter(task => task.completed).length,
      pending: tasks.filter(task => !task.completed).length
    };
  }, [tasks]);

  // Handle user login
  const handleLogin = (username) => {
    setCurrentUser(username);
  };

  // Handle user logout
  const handleLogout = () => {
    clearUser();
    setCurrentUser(null);
    setEditingTask(null);
  };

  // Add new task
  const handleAddTask = (taskData) => {
    const newTask = {
      id: generateId(),
      title: taskData.title,
      description: taskData.description,
      completed: false,
      createdAt: new Date().toISOString()
    };

    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  // Edit existing task
  const handleEditTask = (taskData) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === editingTask.id
          ? { ...task, title: taskData.title, description: taskData.description }
          : task
      )
    );
    setEditingTask(null);
  };

  // Toggle task completion
  const handleToggleComplete = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Delete task
  const handleDeleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  // Start editing a task
  const handleStartEdit = (task) => {
    setEditingTask(task);
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  // Handle filter change
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  // Handle theme toggle
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    saveTheme(newTheme);
  };

  // If user is not logged in, show login screen
  if (!currentUser) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>📋 Personal Task Tracker</h1>
          <div className="user-info">
            <span>Welcome, <strong>{currentUser}</strong>!</span>
            <button onClick={toggleTheme} className="theme-toggle-btn" title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          {/* Task Form */}
          <section className="task-form-section">
            <TaskForm
              onSubmit={editingTask ? handleEditTask : handleAddTask}
              editTask={editingTask}
              onCancel={handleCancelEdit}
            />
          </section>

          {/* Task Filter */}
          <section className="task-filter-section">
            <TaskFilter
              currentFilter={filter}
              onFilterChange={handleFilterChange}
              taskCounts={taskCounts}
            />
          </section>

          {/* Task List */}
          <section className="task-list-section">
            <TaskList
              tasks={filteredTasks}
              onToggleComplete={handleToggleComplete}
              onEdit={handleStartEdit}
              onDelete={handleDeleteTask}
              currentFilter={filter}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
