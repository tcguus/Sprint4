import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="w-full h-24 bg-cinzaescuro text-white font-semibold text-lg flex justify-between">
      <div className="w-[33vw] bg-red-500">
      </div>
      <div className="w-[33vw] flex flex-col">
        <div className="h-[50%] w-full flex justify-evenly">
          <a href="http://" target="_blank" rel="noopener noreferrer" className="mt-auto"><AiFillInstagram className="text-3xl"/></a>
          <a href="http://" target="_blank" rel="noopener noreferrer" className="mt-auto"><AiFillInstagram className="text-3xl"/></a>
          <a href="http://" target="_blank" rel="noopener noreferrer" className="mt-auto"><AiFillInstagram className="text-3xl"/></a>
          <a href="http://" target="_blank" rel="noopener noreferrer" className="mt-auto"><AiFillInstagram className="text-3xl"/></a>
          <a href="http://" target="_blank" rel="noopener noreferrer" className="mt-auto"><AiFillInstagram className="text-3xl"/></a>
          <a href="http://" target="_blank" rel="noopener noreferrer" className="mt-auto"><AiFillInstagram className="text-3xl"/></a>
        </div>
        <div className="w-full h-[50%] flex justify-center">
          <p className="text-sm font-medium mt-[auto]">© Copyright 2024 by Phygital Porto. Todos os direitos reservados.</p>
        </div>
      </div>
      <div className="w-[33vw] bg-red-500">asas</div>
    </footer>
  )
}