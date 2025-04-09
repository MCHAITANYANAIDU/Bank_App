import React, { useState } from 'react';
import './theme.css';

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'dashboard dark' : 'dashboard light'}>
      <h2>Investment Dashboard</h2>
      <button onClick={toggleTheme}>
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button>
      <p>This is an example of theme toggling using React state.</p>
    </div>
  );
};

export default ThemeSwitcher;
