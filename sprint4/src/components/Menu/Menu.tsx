export default function Menu() {
  return (
    <nav className="h-[3rem] flex w-full hidden sticky top-0 bg-white dark:bg-escuro border-b-cinza border-b-2 dark:border-cinzaescuro transition duration-300 tb:inline-flex">
      <ul className="flex justify-evenly w-full items-center">
        <li>
          <a
            href="#sec1"
            className="text-azul font-bold px-4 py-2 transition-colors duration-300 hover:bg-azulescuro hover:text-white rounded-[0.4rem]"
          >
            Nosso serviço
          </a>
        </li>
        <li>
          <a
            href="#sec2"
            className="text-azul font-bold px-4 py-2 transition-colors duration-300 hover:bg-azulescuro hover:text-white rounded-[0.4rem]"
          >
            FAQ
          </a>
        </li>
        <li>
          <a
            href="#sec3"
            className="text-azul font-bold px-4 py-2 transition-colors duration-300 hover:bg-azulescuro hover:text-white rounded-[0.4rem]"
          >
            Relatar problema
          </a>
        </li>
        <li>
          <a
            href="#sec4"
            className="text-azul font-bold px-4 py-2 transition-colors duration-300 hover:bg-azulescuro hover:text-white rounded-[0.4rem]"
          >
            Oficinas próximas
          </a>
        </li>
        <li>
          <a
            href="#sec5"
            className="text-azul font-bold px-4 py-2 transition-colors duration-300 hover:bg-azulescuro hover:text-white rounded-[0.4rem]"
          >
            Integrantes
          </a>
        </li>
      </ul>
    </nav>
  );
}
