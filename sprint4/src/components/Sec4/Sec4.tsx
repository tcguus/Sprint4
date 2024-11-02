import Image from "next/image";
import Link from "next/link";
import { MdOutlinePlace } from "react-icons/md";

export default function Sec4() {
  return (
    <div
      id="sec4"
      className="w-full bg-white dark:bg-preto flex min-h-[calc(100vh-3rem)] scroll-mt-[3rem]"
    >
      <div className="w-[50%] flex flex-col justify-center items-center min-h-[calc(100vh-3rem)]">
        <h1 className="font-bold text-3xl text-center">
          Encontre a Oficina da Porto mais próxima de você!
        </h1>
        <Image
          src="/loc-branco.svg"
          alt="Localização"
          width={600}
          height={300}
          className="mt-[1.5rem] dark:hidden"
        />
        <Image
          src="/loc-preto.svg"
          alt="Localização"
          width={600}
          height={300}
          className="mt-[1.5rem] dark:block hidden"
        />
      </div>
      <div className="w-[50%] flex justify-center items-center">
        <div className="space-y-6 overflow-auto overflow-y-scroll items-center w-[60%] h-[40rem] flex-grow flex flex-col m-auto">
          <div className="p-4 bg-gray-100 dark:bg-cinzaescuro w-[60%] rounded shadow">
            <h3 className="text-lg font-semibold">Reycar</h3>
            <p className="flex">
              <MdOutlinePlace className="fa-solid fa-location-dot mr-2 mt-1" />
              Rua LUIS GAMA 185 - MOOCA - SÃO PAULO/SP
              <br /> (11) 3209-1166
            </p>
            <Link
              href="https://www.google.com/search?q=Reycar"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Ver Detalhes
            </Link>
          </div>
          <div className="p-4 bg-gray-100 dark:bg-cinzaescuro rounded w-[60%] shadow">
            <h3 className="text-lg font-semibold">Canaã Funilaria e Pintura</h3>
            <p className="flex">
              <MdOutlinePlace className="fa-solid fa-location-dot mr-2 mt-1" />
              Rua CONSELHEIRO RAMALHO 487 - BELA VISTA - SÃO PAULO/SP
              <br /> (11) 3104-7760
            </p>
            <Link
              href="https://www.google.com/search?q=Canaa+Funelaria+e+Pintura"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Ver Detalhes
            </Link>
          </div>
          <div className="p-4 bg-gray-100 dark:bg-cinzaescuro rounded w-[60%] shadow">
            <h3 className="text-lg font-semibold">Oficina RN Service Car</h3>
            <p className="flex">
              <MdOutlinePlace className="fa-solid fa-location-dot mr-2 mt-1" />
              Rua HELVETIA 468 - CAMPOS ELISEOS - SÃO PAULO/SP
              <br /> (11) 3361-8677
            </p>
            <Link
              href="https://www.google.com/search?q=Oficina+RN+Service+Car"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Ver Detalhes
            </Link>
          </div>
          <div className="p-4 bg-gray-100 dark:bg-cinzaescuro rounded w-[60%] shadow">
            <h3 className="text-lg font-semibold">Stop Car Bem</h3>
            <p className="flex">
              <MdOutlinePlace className="fa-solid fa-location-dot mr-2 mt-1" />
              Rua DOUTOR FREIRE 192 - BRÁS - SÃO PAULO/SP
              <br /> (11) 93004-0738
            </p>
            <Link
              href="https://www.google.com/search?q=Stop+Car+Bem"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Ver Detalhes
            </Link>
          </div>
          <div className="p-4 bg-gray-100 dark:bg-cinzaescuro rounded w-[60%] shadow">
            <h3 className="text-lg font-semibold">Clubcar Veículos Cambuci</h3>
            <p className="flex">
              <MdOutlinePlace className="fa-solid fa-location-dot mr-2 mt-1" />
              Rua CLIMACO BARBOSA 191 - CAMBUCI - SÃO PAULO/SP
              <br /> (11) 3346-2582
            </p>
            <Link
              href="https://www.google.com/search?q=Clubcar+Veiculos+Cambuci"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Ver Detalhes
            </Link>
          </div>
          <div className="p-4 bg-gray-100 dark:bg-cinzaescuro rounded w-[60%] shadow">
            <h3 className="text-lg font-semibold">
              Ribeiro Renovadora de Veículos
            </h3>
            <p className="flex">
              <MdOutlinePlace className="fa-solid fa-location-dot mr-2 mt-1" />
              Rua JOSE BENTO 50 - CAMBUCI - SÃO PAULO/SP
              <br /> (11) 3209-2954
            </p>
            <Link
              href="https://www.google.com/search?q=Ribeiro+Renovadora+de+Veículos"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Ver Detalhes
            </Link>
          </div>
          <div className="p-4 bg-gray-100 dark:bg-cinzaescuro rounded w-[60%] shadow">
            <h3 className="text-lg font-semibold">Quality AutoTec</h3>
            <p className="flex">
              <MdOutlinePlace className="fa-solid fa-location-dot mr-2 mt-1" />
              Rua SALVADOR LEME 291 - BOM RETIRO - SÃO PAULO/SP
              <br /> (11) 3326-9947
            </p>
            <Link
              href="https://www.google.com/search?q=Quality+AutoTec"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Ver Detalhes
            </Link>
          </div>
          <div className="p-4 bg-gray-100 dark:bg-cinzaescuro rounded w-[60%] shadow">
            <h3 className="text-lg font-semibold">Trend Auto Service</h3>
            <p className="flex">
              <MdOutlinePlace className="fa-solid fa-location-dot mr-2 mt-1" />
              Rua CONSELHEIRO NÉBIAS 1530 - CAMPOS ELISEOS - SÃO PAULO/SP
              <br /> (11) 99675-1794
            </p>
            <Link
              href="https://www.google.com/search?q=Trend+Studio+oficina"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Ver Detalhes
            </Link>
          </div>
          <div className="p-4 bg-gray-100 dark:bg-cinzaescuro rounded w-[60%] shadow">
            <h3 className="text-lg font-semibold">Oficina Globo</h3>
            <p className="flex">
              <MdOutlinePlace className="fa-solid fa-location-dot mr-2 mt-1" />
              Estrada PRT 163 S/N - ZONA RURAL - CAPITÃO LEÔNIDAS MARQUES/PR
              <br /> (45) 3286-1419
            </p>
            <Link
              href="https://www.google.com/search?q=Oficina+Globo"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Ver Detalhes
            </Link>
          </div>
          <div className="p-4 bg-gray-100 dark:bg-cinzaescuro rounded w-[60%] shadow">
            <h3 className="text-lg font-semibold">
              Nicola Garage Serviços Automotivos
            </h3>
            <p className="flex">
              <MdOutlinePlace className="fa-solid fa-location-dot mr-2 mt-1" />
              Rua BARRA FUNDA 308 - BARRA FUNDA - SÃO PAULO/SP
              <br /> (11) 3666-6655
            </p>
            <Link
              href="https://www.google.com/search?q=Nicola+Garage+Serviços+Automotivos"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Ver Detalhes
            </Link>
          </div>
          <div className="p-4 bg-gray-100 dark:bg-cinzaescuro rounded w-[60%] shadow">
            <h3 className="text-lg font-semibold">
              Oficina 4 Rodas Mais - Funilaria Express
            </h3>
            <p className="flex">
              <MdOutlinePlace className="fa-solid fa-location-dot mr-2 mt-1" />
              Rua ORVILLE DERBY 140 - MOOCA - SÃO PAULO/SP
              <br /> (11) 2697-3057
            </p>
            <Link
              href="https://www.google.com/search?q=Oficina+4+Rodas+Mais+-+Funilaria+Express"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Ver Detalhes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
