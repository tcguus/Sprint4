"use client";
 
import { IoMdCloseCircleOutline } from "react-icons/io";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { TbLock } from "react-icons/tb";
import Link from "next/link";
 
export default function Login() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleThemeToggle = (darkMode: boolean) => {
    setIsDarkMode(darkMode);
  };
 
  return (
    <div className="flex w-full h-[100vh] justify-evenly items-center transition duration-300 dark:bg-cinzaescuro">
      <div className="flex gap-2">
        <Image
          src="/logo-porto.svg"
          width="150"
          height="150"
          alt="Logo Porto Seguro"
        />
        <div className="flex flex-col justify-center gap-2">
          <p className="font-bold text-azul text-[4rem] leading-none">
            Pygital
          </p>
          <p className="font-bold text-azul text-[4rem] leading-none">Porto</p>
        </div>
      </div>
      <div className="w-[35rem] h-[40rem] bg-cinza flex flex-col border-4 rounded-xl border-azul dark:bg-preto">
        <div className="flex w-full h-[3rem] justify-end items-center pr-4 gap-2 text-azul">
          <ThemeToggle onToggle={handleThemeToggle} />
          <IoMdCloseCircleOutline className="text-[1.7rem]" />
        </div>
        <div className="w-full h-[35rem] flex flex-col gap-4 justify-center items-center">
          <h1 className="font-bold text-3xl">Login</h1>
          <p className="text">Por favor, faça login na sua conta!</p>
          <div className="flex bg-white p-2 items-center border-2 border-azul rounded-xl dark:bg-cinzaescuro">
            <input
              type="text"
              placeholder="E-mail"
              className="font-bold placeholder-black focus:outline-none dark:bg-cinzaescuro dark:placeholder-white"
            />
            <HiOutlineMail />
          </div>
          <div className="flex bg-white p-2 items-center border-2 border-azul rounded-xl">
            <input
              type="password"
              placeholder="Senha"
              className="font-bold placeholder-black focus:outline-none dark:bg-cinzaescuro dark:placeholder-white"
            />
            <TbLock />
          </div>
          <div className="flex flex-col items-center gap-1">
            <button className="pr-6 pl-6 pt-2 pb-2 bg-azul font-bold text-2xl rounded-xl text-white">Entrar</button>
            <Link className="text-[13px] underline transition duration-300 hover:text-azul" href="/">Não possui conta? Crie uma agora!</Link>
          </div>
        </div>
        <div className="w-full h-[2rem] flex justify-center items-center ">
          <p>
            © Copyright 2024 by Phygital Porto. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}