import Image from "next/image";
import Link from "next/link";

export default function Sec5() {
  return (
    <div
      id="sec5"
      className="w-full bg-white dark:bg-preto flex flex-col min-h-[calc(100vh-3rem)] scroll-mt-[3rem]"
    >
      <div className="w-full h-[0.5rem] bg-azul justify-end tb:h-[1rem]"></div>
      <h1 className="text-azul text-2xl font-bold text-center mt-[1.5rem] mb-[1.5rem] tb:text-5xl lp:mt-[3rem] lp:mb-0">
        Conheça os nossos integrantes!
      </h1>
      <div className="flex flex-col items-center gap-6 justify-evenly mt-auto mb-auto dark:text-white lp:flex-row lp:items-stretch">
        <div className="w-[33.3%]  h-auto flex flex-col items-center text-center">
          <Image
            src="/integrante-gustavo.jpeg"
            width="250"
            height="250"
            alt="Integrante Gustavo"
            className="rounded-full border-4 border-azul"
          />
          <h3 className="font-bold text-2xl">Gustavo Camargo de Andrade</h3>
          <p className="font-semibold text-lg">RM555562</p>
          <p className="font-semibold text-lg">1TDSPF</p>
          <Link
            href="https://github.com/tcguus"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto transition duration-300 font-semibold text-lg hover:text-azul hover:underline"
          >
            https://github.com/tcguus
          </Link>
        </div>
        <div className="w-[33.3%]  h-auto flex flex-col items-center text-center">
          <Image
            src="/integrante-leonardo.jpeg"
            width="250"
            height="250"
            alt="Integrante Leonardo"
            className="rounded-full border-4 border-azul"
          />
          <h3 className="font-bold text-2xl">Leonardo César Nascimento</h3>
          <p className="font-semibold text-lg">RM558373</p>
          <p className="font-semibold text-lg">1TDSPF</p>
          <Link
            href="https://github.com/leoc7sar"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto transition duration-300 font-semibold text-lg hover:text-azul hover:underline"
          >
            https://github.com/leoc7sar
          </Link>
        </div>
        <div className="w-[33.3%]  h-auto flex flex-col items-center text-center mb-[1rem] lp:mb-0">
          <Image
            src="/integrante-rodrigo.jpeg"
            width="250"
            height="250"
            alt="Integrante Rodrigo"
            className="rounded-full border-4 border-azul"
          />
          <h3 className="font-bold text-2xl">Rodrigo Souza Mantovanello</h3>
          <p className="font-semibold text-lg">RM555451</p>
          <p className="font-semibold text-lg">1TDSPF</p>
          <Link
            href="https://github.com/rsmanto"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto transition duration-300 font-semibold text-lg hover:text-azul hover:underline"
          >
            https://github.com/rsmanto
          </Link>
        </div>
      </div>
      <div className="w-full h-[0.5rem] bg-azul justify-end mt-auto tb:h-[1rem]"></div>
    </div>
  );
}
