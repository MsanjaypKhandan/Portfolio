'use client';
import { faRotateForward } from '@fortawesome/free-solid-svg-icons';
import { Rotate3D } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { IoSettings } from "react-icons/io5";
const themes = [
  { name: 'blue', color: '#77d6e2' },
  { name: 'red', color: '#1abc9c' },
  { name: 'green', color: '#e67e22' },
  { name: 'light', color: '#e74c3c' },
  { name: 'dark', color: '#fa7296' },
];

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.add(`theme-${savedTheme}`);
  }, []);

  const changeTheme = (newTheme) => {
    document.documentElement.classList.remove(`theme-${theme}`);
    document.documentElement.classList.add(`theme-${newTheme}`);
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
    setShowDropdown(false); // Hide dropdown after selection
  };

  // Hide dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block">
    <button
      onClick={() => setShowDropdown(!showDropdown)}
      className="px-4 py-2 ml-0 bg-primaryColor text-white rounded-md flex items-center"
    >
      <IoSettings
        size={32}
        className={`transition-transform duration-300 ${
          showDropdown ? "rotate-90" : "rotate-0"
        }`}
      />
    </button>

    {showDropdown && (
      <div
        ref={dropdownRef}
        className="absolute h-10 left-full -ml-3 -mt-10 bg-grey dark:bg-gray-800 rounded-lg shadow-lg flex items-center"
      >
        {themes.map((t) => (
          <button
            key={t.name}
            onClick={() => changeTheme(t.name)}
            className={`w-5 h-5 ml-2 mr-2 rounded-full ${
              theme === t.name ? "ring-4 ring-primaryColor" : ""
            }`}
            style={{ backgroundColor: t.color }}
          ></button>
        ))}
      </div>
    )}
  </div>
  );
}
