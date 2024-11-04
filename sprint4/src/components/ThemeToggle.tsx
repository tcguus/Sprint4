"use client";

import React, { useState, useEffect } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";

interface ThemeToggleProps {
  onToggle: (isDarkMode: boolean) => void;
}

const isDarkMode: boolean = true;
if (isDarkMode) {
  console.log('Dark mode is enabled');
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ onToggle }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(storedDarkMode);
    document.documentElement.classList.toggle("dark", storedDarkMode);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());

    onToggle(newDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`flex items-center justify-center p-2 rounded-full transition-colors duration-300 
      ${isDarkMode ? "hover:bg-cinzaescuro" : "hover:bg-gray-300"}`}
    >
      {isDarkMode ? (
        <IoMoon className="text-2xl text-azul" />
      ) : (
        <IoSunny className="text-2xl text-azul" />
      )}
    </button>
  );
};

export default ThemeToggle;
