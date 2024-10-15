import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoSunny } from "react-icons/io5";

export default function Header() {
  return (
    <header className="h-12  w-full flex items-center">
      <div className="flex items-center ml-4 gap-1">
        <img src="/logo-porto.svg" alt="Logo Porto Seguro" className="w-8" />
        <h1 className="text-4xl text-azul font-bold">Phygital Porto</h1>
      </div>
      <div className="flex items-center ml-auto mr-4 gap-3">
        <IoSunny className="text-2xl text-azul" />
        <button className="flex items-center gap-1 text-azul border-2 border-blue-500 rounded-[10px] p-1">
          <FaUserCircle />
          <p className="ml-1 font-bold">Login</p>
          <IoIosArrowDown />
        </button>
      </div>
    </header>
  )
}