"use client";

import { IoMdCloseCircleOutline } from "react-icons/io";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import { useState } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

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
          <Link className="mr-auto ml-3" href="/login">
            <FaArrowLeft className="text-[1.4rem]" />
          </Link>
          <ThemeToggle onToggle={handleThemeToggle} />
          <Link href="/">
            <IoMdCloseCircleOutline className="text-[1.7rem] hover:text-red-500 transtion duration-300" />
          </Link>
        </div>
        <form className="w-full h-[35rem] flex flex-col gap-2 justify-center items-center">
          <h1 className="font-bold text-3xl">Cadastre-se</h1>
          <p className="text">Preencha os dados:</p>
          <div className="flex flex-col gap-1">
            <label htmlFor="nome" className="font-bold ml-1">
              Nome:
            </label>
            <input
              type="text"
              placeholder="Digite seu nome completo..."
              className="placeholder-black focus:outline-none dark:bg-cinzaescuro dark:placeholder-white p-2 border-2 border-azul rounded-xl placeholder:text-sm"
              required
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="cpf" className="font-bold ml-1">
              CPF:
            </label>
            <input
              type="text"
              placeholder="Digite seu CPF..."
              className="placeholder-black focus:outline-none dark:bg-cinzaescuro dark:placeholder-white p-2 border-2 border-azul rounded-xl placeholder:text-sm"
              required
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-bold ml-1">
              E-mail
            </label>
            <input
              type="text"
              placeholder="Digite seu e-mail..."
              className="placeholder-black focus:outline-none dark:bg-cinzaescuro dark:placeholder-white p-2 border-2 border-azul rounded-xl placeholder:text-sm"
              required
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="senha" className="font-bold ml-1">
              Senha:
            </label>
            <input
              type="text"
              placeholder="Digite sua senha..."
              className="placeholder-black focus:outline-none dark:bg-cinzaescuro dark:placeholder-white p-2 border-2 border-azul rounded-xl placeholder:text-sm"
              required
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col items-center mt-2">
            <button className="pr-6 pl-6 pt-2 pb-2 bg-azul font-bold text-2xl rounded-xl text-white">
              Criar conta
            </button>
          </div>
        </form>
        <div className="w-full h-[2rem] flex justify-center items-center ">
          <p>
            © Copyright 2024 by Phygital Porto. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}
