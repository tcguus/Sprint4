"use client";

import { IoMdCloseCircleOutline } from "react-icons/io";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HiOutlineMail } from "react-icons/hi";
import { TbLock } from "react-icons/tb";

export default function Login() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  const handleThemeToggle = (darkMode: boolean) => {
    setIsDarkMode(darkMode);
  };

  const handleLogin = () => {
    const user = localStorage.getItem("user");
    if (user) {
      const storedUser = JSON.parse(user);
      if (storedUser.email === email) {
        console.log("Login bem-sucedido");
        router.push("/");
      } else {
        console.log("Email ou senha incorretos");
      }
    }
  };

  return (
    <div className="flex w-full h-[100vh] justify-evenly items-center transition duration-300 dark:bg-cinzaescuro ">
      <div className="gap-2 hidden lp:flex ">
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
      <div className="w-[18rem] h-[35rem] bg-cinza flex flex-col border-4 rounded-xl border-azul dark:bg-preto mm:w-[20rem] ml:w-[25rem] tb:w-[35rem]">
        <div className="flex w-full h-[3rem] justify-end items-center pr-4 gap-2 text-azul">
          <ThemeToggle onToggle={handleThemeToggle} />
          <Link href="/">
            <IoMdCloseCircleOutline className="text-[1.7rem] hover:text-red-500 transtion duration-300" />
          </Link>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }} className="w-full h-[30rem] flex flex-col gap-4 justify-center items-center">
          <h1 className="font-bold text-3xl">Login</h1>
          <p className="text">Por favor, faça login na sua conta!</p>
          <div className="flex bg-white p-2 items-center border-2 border-azul rounded-xl dark:bg-cinzaescuro">
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="font-bold placeholder-black focus:outline-none dark:bg-cinzaescuro dark:placeholder-white"
              required
              autoComplete="off"
            />
            <HiOutlineMail />
          </div>
          <div className="flex bg-white p-2 items-center border-2 border-azul rounded-xl dark:bg-cinzaescuro">
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="font-bold placeholder-black focus:outline-none dark:bg-cinzaescuro dark:placeholder-white"
              required
              autoComplete="off"
            />
            <TbLock />
          </div>
          <div className="flex flex-col items-center gap-1">
            <button type="submit" className="pr-6 pl-6 pt-2 pb-2 bg-azul font-bold text-2xl rounded-xl text-white">
              Entrar
            </button>
            <Link
              className="text-[13px] underline transition duration-300 hover:text-azul"
              href="/cadastro"
            >
              Não possui conta? Crie uma agora!
            </Link>
          </div>
        </form>
        <div className="w-full h-[2rem] flex justify-center items-center text-center mb-[1rem] tb:mb-0">
          <p>
            © Copyright 2024 by Phygital Porto. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}
