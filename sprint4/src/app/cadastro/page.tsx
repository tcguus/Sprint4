"use client";

import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function Cadastro() {
  const [, setIsDarkMode] = useState(false);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  const handleThemeToggle = (darkMode: boolean) => {
    setIsDarkMode(darkMode);
  };

  const handleRegister = () => {
    const newUser = { nome, cpf, email, senha };
    localStorage.setItem("user", JSON.stringify(newUser));
    console.log("Conta cadastrada com sucesso");
    router.push("/login");
  };

  return (
    <div className="flex w-full h-[100vh] justify-evenly items-center transition duration-300 dark:bg-cinzaescuro">
      <div className="gap-2 hidden lp:flex">
        <Image
          src="/logo-porto.svg"
          width="150"
          height="150"
          alt="Logo Porto Seguro"
        />
        <div className="flex flex-col justify-center gap-2">
          <p className="font-bold text-azul text-[4rem] leading-none">
            Phygital
          </p>
          <p className="font-bold text-azul text-[4rem] leading-none">Porto</p>
        </div>
      </div>
      <div className="w-[18rem] h-[35rem] bg-cinza flex flex-col border-4 rounded-xl border-azul dark:bg-preto mm:w-[20rem] ml:w-[25rem] tb:w-[35rem]">
        <div className="flex w-full h-[3rem] justify-end items-center pr-4 gap-2 text-azul">
          <Link className="mr-auto ml-3" href="/login">
            <FaArrowLeft className="text-[1.4rem]" />
          </Link>
          <ThemeToggle onToggle={handleThemeToggle} />
          <Link href="/">
            <IoMdCloseCircleOutline className="text-[1.7rem] hover:text-red-500 transtion duration-300" />
          </Link>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); handleRegister(); }} className="w-full h-[35rem] flex flex-col gap-2 justify-center items-center">
          <h1 className="font-bold text-3xl">Cadastre-se</h1>
          <p className="text">Preencha os dados:</p>
          <div className="flex flex-col gap-1">
            <label htmlFor="nome" className="font-bold ml-1">Nome:</label>
            <input
              type="text"
              placeholder="Digite seu nome completo..."
              className="placeholder-black focus:outline-none dark:bg-cinzaescuro dark:placeholder-white p-2 border-2 border-azul rounded-xl placeholder:text-sm"
              required
              autoComplete="off"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="cpf" className="font-bold ml-1">CPF:</label>
            <input
              type="text"
              placeholder="Digite seu CPF..."
              className="placeholder-black focus:outline-none dark:bg-cinzaescuro dark:placeholder-white p-2 border-2 border-azul rounded-xl placeholder:text-sm"
              required
              autoComplete="off"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-bold ml-1">E-mail:</label>
            <input
              type="email"
              placeholder="Digite seu e-mail..."
              className="placeholder-black focus:outline-none dark:bg-cinzaescuro dark:placeholder-white p-2 border-2 border-azul rounded-xl placeholder:text-sm"
              required
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="senha" className="font-bold ml-1">Senha:</label>
            <input
              type="password"
              placeholder="Digite sua senha..."
              className="placeholder-black focus:outline-none dark:bg-cinzaescuro dark:placeholder-white p-2 border-2 border-azul rounded-xl placeholder:text-sm"
              required
              autoComplete="off"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <button type="submit" className="pr-6 pl-6 pt-2 pb-2 bg-azul font-bold text-2xl rounded-xl text-white mt-2">
            Criar conta
          </button>
        </form>
        <div className="w-full h-[2rem] text-[12px] flex justify-center items-center text-center mb-[0.5rem] tb:mb-0 tb:text-base">
          <p>© Copyright 2024 by Phygital Porto. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
}
