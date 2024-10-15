
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
  return (
    <header className="h-12 bg-red-600 w-full flex items-center">
      <div className="flex items-center ml-4 gap-1">
        <img src="/logo-porto.svg" alt="Logo Porto Seguro"className="w-8"/>
        <h1 className="text-4xl text-azul">Phygital Porto</h1>
      </div>
    </header>
  )
}