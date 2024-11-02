import { AiFillInstagram } from "react-icons/ai";
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoIosAppstore } from "react-icons/io";
import { BiLogoPlayStore } from "react-icons/bi";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full h-[25rem] bg-cinzaescuro text-white text-lg flex flex-col justify-between tb:flex-row tb:h-[6rem]">
      <div className="w-full h-[33%] bg-red-500 flex flex-col justify-center items-center gap-2 tb:w-[1/3] tb:h-auto tb:pl-[1rem]">
        <Link
          href="https://api.whatsapp.com/send?1=pt_BR&phone=551130039303&text=Oi,%20Porto%20Seguro%20!"
          target="_blank"
          rel="noopener noreferrer"
          className="flex text-[1.1rem] items-center gap-1 transition duration-300 hover:text-azul tb:self-start"
        >
          <IoLogoWhatsapp /> WhatsApp
        </Link>
        <Link
          href="https://www.google.com/search?q=Agencia+Porto+Seguro+mais+próxima+de+mim&client=opera-gx&sca_esv=0ab730e59f55f214&sxsrf=ADLYWIIzKKUdF_NpdaCU-W4iJC5wNsj43g%3A1715041360863&ei=UHQ5ZtGhNNOp5OUPx6uB2AQ&udm=&ved=0ahUKEwjRidv4ovqFAxXTFLkGHcdVAEsQ4dUDCBA&uact=5&oq=Agencia+Porto+Seguro+mais+próxima+de+mim&gs_lp=Egxnd3Mtd2l6LXNlcnAiKUFnZW5jaWEgUG9ydG8gU2VndXJvIG1haXMgcHLDs3hpbWEgZGUgbWltMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIESJgOUJUHWJYLcAF4AZABAJgBpgGgAbICqgEDMC4yuAEDyAEA-AEBmAIDoAK6AsICChAAGLADGNYEGEfCAgQQIRgKmAMAiAYBkAYIkgcDMS4yoAfSBQ&sclient=gws-wiz-serp"
          target="_blank"
          rel="noopener noreferrer"
          className="flex text-[1.1rem] items-center gap-1 transition duration-300 hover:text-azul tb:self-start "
        >
          <FaMapLocationDot /> Âgencia mais próxima
        </Link>
      </div>
      <div className="w-full flex flex-col tb:w[1/3]">
        <div className="h-[50%] w-full flex justify-evenly">
          <Link
            href="https://www.instagram.com/portoseguro/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto transition duration-300 hover:text-azul"
          >
            <AiFillInstagram className="text-3xl" />
          </Link>
          <Link
            href="https://www.tiktok.com/@portoseguro"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto transition duration-300 hover:text-azul"
          >
            <AiFillTikTok className="text-3xl" />
          </Link>
          <Link
            href="https://www.youtube.com/portoseguro"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto transition duration-300 hover:text-azul"
          >
            <FaYoutube className="text-3xl" />
          </Link>
          <Link
            href="https://www.facebook.com/porto"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto transition duration-300 hover:text-azul"
          >
            <FaFacebookSquare className="text-3xl" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/porto/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto transition duration-300 hover:text-azul"
          >
            <FaLinkedin className="text-3xl" />
          </Link>
        </div>
        <div className="w-full h-[50%] flex justify-center">
          <p className="text-sm font-medium mt-[1rem] mb-[0.5rem] text-center tb:mt-[auto]">
            © Copyright 2024 by Phygital Porto. Todos os direitos reservados.
          </p>
        </div>
      </div>
      <div className="w-full h-[33%] flex flex-col justify-center items-center tb:w-[1/3] tb:h-auto">
        <div className="flex flex-col items-center gap-2 tb:pr-[1rem]">
          <p className="">Baixe o app da Porto!</p>
          <div className="flex gap-8 text-right items-center">
            <Link
              href="https://apps.apple.com/br/app/porto-seguros-cartão-e/id1511026277"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:text-azul"
            >
              <IoIosAppstore className="text-3xl" />
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=br.com.portoseguro.experienciacliente.mundoporto&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:text-azul"
            >
              <BiLogoPlayStore className="text-3xl" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
