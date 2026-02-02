
import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { Student } from './types';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<Student | null>(null);

  // Persistence (optional for GitHub pages)
  useEffect(() => {
    const saved = localStorage.getItem('vibecoding_user');
    if (saved) {
      try {
        setCurrentUser(JSON.parse(saved));
      } catch (e) {
        localStorage.removeItem('vibecoding_user');
      }
    }
  }, []);

  const handleLogin = (student: Student) => {
    setCurrentUser(student);
    localStorage.setItem('vibecoding_user', JSON.stringify(student));
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('vibecoding_user');
  };

  return (
    <div className="min-h-screen">
      {!currentUser ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Dashboard student={currentUser} onLogout={handleLogout} />
      )}
    </div>
  );
};

export default App;
