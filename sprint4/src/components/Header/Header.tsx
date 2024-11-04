"use client";

import { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import ThemeToggle from "../ThemeToggle";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MdLogout } from "react-icons/md";


export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      setUserName(user.nome);
      setUserEmail(user.email);
    }
  }, []);

  const handleThemeToggle = (darkMode: boolean) => {
    setIsDarkMode(darkMode);
  };

  const handleLoginClick = () => {
    if (!userName) {
      router.push("/login");
    } else {
      setIsDropdownOpen((prev) => !prev);
    }
  };

  const handleLogout = () => {
    setUserName(null);
    setUserEmail(null);
    setIsDropdownOpen(false);
  };

  return (
    <header
      className={`h-[4rem] w-full flex items-center transition duration-300 ${isDarkMode ? "bg-escuro" : "bg-branco"
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
      <div className="flex items-center ml-auto mr-4 gap-1 ml:gap-3 relative">
        <ThemeToggle onToggle={handleThemeToggle} />
        <button
          onClick={handleLoginClick}
          className="flex items-center gap-1 text-azul border-0 border-blue-500 rounded-[10px] p-1 ml:border-2"
        >
          <FaUserCircle className="text-[1.4rem] ml:text-base" />
          <p className="ml-1 font-bold hidden ml:block">
            {userName || "Login"}
          </p>
          {userName && <IoIosArrowDown className="hidden ml:block" />}
        </button>
        <AnimatePresence>
          {isDropdownOpen && userEmail && (
            <motion.div
              initial={{ opacity: 0, translateY: -10 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-[3rem] right-0 bg-white dark:bg-escuro border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-lg w-48 z-50"
            >
              <p className="text-sm font-semibold">Email:</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">{userEmail}</p>
              <button
                onClick={handleLogout}
                className="mt-2 text-sm flex items-center gap-1 text-red-500 hover:underline"
              >
                <MdLogout />
                Logout
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
