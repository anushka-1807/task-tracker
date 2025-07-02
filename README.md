# Personal Task Tracker

## 📖 Description

A modern, responsive personal task management application built with React. This application allows users to manage their daily tasks with a clean, intuitive interface that works seamlessly across desktop and mobile devices.

## 🚀 Features

- **Simple Authentication**: Basic login system with username storage in localStorage
- **Task Management**: 
  - Add new tasks with title (required) and description (optional)
  - Edit existing tasks inline
  - Delete tasks with confirmation prompts
  - Toggle task completion status
- **Smart Filtering**: 
  - View all tasks, completed tasks, or pending tasks
  - Live task counts for each filter
- **Data Persistence**: All tasks and user data are saved to localStorage
- **Dark Mode**: Toggle between light and dark themes with preference persistence
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Modern UI**: Clean, modern interface with smooth animations and transitions
- **Task Details**: Display creation date/time and completion status
- **Visual Distinction**: Clear visual differences between completed and pending tasks

## 🛠 Setup Instructions

1. Clone the repository
```bash
git clone <repository-url>
cd task-tracker
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🧰 Technologies Used

- **React.js** - Frontend framework
- **React Hooks** - State management (useState, useEffect, useMemo)
- **CSS3** - Styling with modern CSS features
- **localStorage API** - Data persistence
- **Responsive Design** - Mobile-first approach

## 🏗 Project Structure

```
task-tracker/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Login.js          # User authentication component
│   │   ├── TaskForm.js       # Add/edit task form
│   │   ├── TaskItem.js       # Individual task display
│   │   ├── TaskList.js       # Task list container
│   │   └── TaskFilter.js     # Task filtering tabs
│   ├── utils/
│   │   └── localStorage.js   # localStorage utility functions
│   ├── App.js               # Main application component
│   ├── App.css              # Application styles
│   └── index.js             # React DOM entry point
├── README.md
└── package.json
```

## 🎯 Component Architecture

### App.js
Main application component that manages global state and coordinates between all child components.

### Login.js
Handles user authentication with username input and localStorage persistence.

### TaskForm.js
Reusable form component for both adding new tasks and editing existing ones.

### TaskItem.js
Individual task display with completion toggle, edit, and delete functionality.

### TaskList.js
Container component that renders the list of tasks and handles empty states.

### TaskFilter.js
Filter tabs component with task counts and active filter highlighting.

### localStorage.js
Utility functions for saving and loading data from browser localStorage.

## 🔧 Key Features Implemented

### ✅ Core Requirements
- [x] Simple login with localStorage persistence
- [x] Add tasks with title (required) and description (optional)
- [x] Edit tasks inline
- [x] Delete tasks with confirmation
- [x] Toggle task completion status
- [x] Display creation date/time
- [x] Visual distinction between completed and pending tasks
- [x] Task filtering (All, Completed, Pending)
- [x] Task count display for each filter
- [x] Data persistence with localStorage
- [x] Dark mode toggle with theme persistence
- [x] Responsive design for mobile and desktop
- [x] Clean component structure with React hooks

### 🎨 UI/UX Features
- Modern gradient design with smooth animations
- Hover effects and micro-interactions
- Custom checkbox styling
- Mobile-first responsive design
- Empty state messaging
- Loading states and error handling
- Accessible form inputs with proper labels

### 🛡 Error Handling
- Form validation for required fields
- LocalStorage error handling
- Empty state management
- Confirmation dialogs for destructive actions

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:
- **Desktop** (1200px+): Full layout with side-by-side elements
- **Tablet** (768px-1199px): Adjusted spacing and layout
- **Mobile** (480px-767px): Stacked layout with touch-friendly buttons
- **Small Mobile** (<480px): Optimized for smaller screens

## 🧪 Usage Examples

1. **Login**: Enter any username to access the task dashboard
2. **Add Task**: Fill in the task form and click "Add Task"
3. **Complete Task**: Click the checkbox next to any task
4. **Edit Task**: Click the edit (✏️) button on any task
5. **Delete Task**: Click the delete (🗑️) button and confirm
6. **Filter Tasks**: Use the filter tabs to view All, Pending, or Completed tasks
7. **Toggle Theme**: Click the moon (🌙) or sun (☀️) button to switch between light and dark modes
8. **Logout**: Click the logout button to return to the login screen

## 🎨 Design Decisions

- **Color Scheme**: Modern purple gradient for primary actions, maintaining accessibility
- **Typography**: System fonts for optimal performance and readability
- **Spacing**: Consistent spacing using rem units for scalability
- **Icons**: Emoji icons for universal compatibility and visual appeal
- **Animations**: Subtle hover and transition effects for enhanced user experience

## 🔮 Future Enhancements

Potential features that could be added:
- Search functionality across tasks
- Task priority levels and sorting
- Due dates and reminders
- Task categories/tags
- Export/import functionality
- Multiple user support
- Cloud synchronization
- Drag and drop task reordering

## 🐛 Known Issues

None currently identified. The application has been tested across modern browsers and devices.

## 📄 License

This project is part of a technical assessment and is intended for educational purposes.
