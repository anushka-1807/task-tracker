// localStorage utility functions for task management

export const saveToLocalStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

export const loadFromLocalStorage = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    return defaultValue;
  }
};

export const removeFromLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing from localStorage:', error);
  }
};

// Specific functions for tasks and user
export const saveTasks = (tasks) => {
  saveToLocalStorage('tasks', tasks);
};

export const loadTasks = () => {
  return loadFromLocalStorage('tasks', []);
};

export const saveUser = (username) => {
  saveToLocalStorage('currentUser', username);
};

export const loadUser = () => {
  return loadFromLocalStorage('currentUser', null);
};

export const clearUser = () => {
  removeFromLocalStorage('currentUser');
};

// Theme management functions
export const saveTheme = (theme) => {
  saveToLocalStorage('theme', theme);
};

export const loadTheme = () => {
  return loadFromLocalStorage('theme', 'light');
}; 