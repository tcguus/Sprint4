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
    <footer className="w-full h-[6rem] bg-cinzaescuro text-white text-lg flex justify-between">
      <div className="w-[33vw] flex flex-col justify-center gap-2 pl-[1rem]">
        <Link
          href="https://api.whatsapp.com/send?1=pt_BR&phone=551130039303&text=Oi,%20Porto%20Seguro%20!"
          target="_blank"
          rel="noopener noreferrer"
          className="flex self-start text-[1.1rem] items-center gap-1 transition duration-300 hover:text-azul"
        >
          <IoLogoWhatsapp /> WhatsApp
        </Link>
        <Link
          href="https://www.google.com/search?q=Agencia+Porto+Seguro+mais+próxima+de+mim&client=opera-gx&sca_esv=0ab730e59f55f214&sxsrf=ADLYWIIzKKUdF_NpdaCU-W4iJC5wNsj43g%3A1715041360863&ei=UHQ5ZtGhNNOp5OUPx6uB2AQ&udm=&ved=0ahUKEwjRidv4ovqFAxXTFLkGHcdVAEsQ4dUDCBA&uact=5&oq=Agencia+Porto+Seguro+mais+próxima+de+mim&gs_lp=Egxnd3Mtd2l6LXNlcnAiKUFnZW5jaWEgUG9ydG8gU2VndXJvIG1haXMgcHLDs3hpbWEgZGUgbWltMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIESJgOUJUHWJYLcAF4AZABAJgBpgGgAbICqgEDMC4yuAEDyAEA-AEBmAIDoAK6AsICChAAGLADGNYEGEfCAgQQIRgKmAMAiAYBkAYIkgcDMS4yoAfSBQ&sclient=gws-wiz-serp"
          target="_blank"
          rel="noopener noreferrer"
          className="flex self-start text-[1.1rem] items-center gap-1 transition duration-300 hover:text-azul"
        >
          <FaMapLocationDot /> Âgencia mais próxima
        </Link>
      </div>
      <div className="w-[33vw] flex flex-col">
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
          <p className="text-sm font-medium mt-[auto] mb-[0.2rem]">
            © Copyright 2024 by Phygital Porto. Todos os direitos reservados.
          </p>
        </div>
      </div>
      <div className="w-[33vw] flex flex-col justify-center items-end">
        <div className="flex flex-col items-center pr-[1rem] gap-2">
          <p className="">Baixe o app da Porto!</p>
          <div className="flex gap-8 text-right items-center">
            <Link href="https://apps.apple.com/br/app/porto-seguros-cartão-e/id1511026277" target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:text-azul">
              <IoIosAppstore className="text-3xl" />
            </Link>
            <Link href="https://play.google.com/store/apps/details?id=br.com.portoseguro.experienciacliente.mundoporto&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:text-azul">
              <BiLogoPlayStore className="text-3xl"/>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
