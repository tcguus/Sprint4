"use client";

import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import ThemeToggle from "../ThemeToggle";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeToggle = (darkMode: boolean) => {
    setIsDarkMode(darkMode);
  };

  return (
    <header
      className={`h-[4rem] w-full flex items-center transition duration-300 ${
        isDarkMode ? "bg-escuro" : "bg-branco"
      }`}
      id="sec1"
    >
      <div className="flex items-center ml-4 gap-1">
        <Image
          src="/logo-porto.svg"
          alt="Logo Porto Seguro"
          width={32}
          height={32}
        />
        <h1 className="text-2xl text-azul font-bold tb:text-4xl">Phygital Porto</h1>
      </div>
      <div className="flex items-center ml-auto mr-4 gap-1 ml:gap-3">
        <ThemeToggle onToggle={handleThemeToggle} />
        <button className="flex items-center gap-1 text-azul border-0 border-blue-500 rounded-[10px] p-1 ml:border-2">
          <FaUserCircle />
          <p className="ml-1 font-bold hidden ml:block">Login</p>
          <IoIosArrowDown className="hidden ml:block"/>
        </button>
      </div>
    </header>
  );
}
