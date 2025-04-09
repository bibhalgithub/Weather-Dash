import React, { useEffect, useState } from 'react';

export default function ThemeToggle() {
  
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="text-center mb-5">
      
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 rounded-lg border border-gray-400 cursor-pointer"
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </div>
  );
}
