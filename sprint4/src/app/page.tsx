import { FaGears } from "react-icons/fa6";
import { FaBalanceScale } from "react-icons/fa";
import { FaTools } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <nav className="h-[3rem] flex w-full sticky top-0 bg-white dark:bg-escuro border-b-cinza border-b-2 dark:border-cinzaescuro">
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
              Oficinas próximas
            </a>
          </li>
          <li>
            <a
              href="#sec4"
              className="text-azul font-bold px-4 py-2 transition-colors duration-300 hover:bg-azulescuro hover:text-white rounded-[0.4rem]"
            >
              Relatar problema
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
      <div className="flex flex-col w-full">
        <div className="w-full flex flex-col items-center text-white bg-bannerImg bg-no-repeat bg-cover bg-opacity-50 min-h-[calc(100vh-7rem)]" >
          <h1 className="text-4xl font-bold mt-[3rem]">O que oferecemos?</h1>
          <p className="text-center w-[70%] font-semibold text-xl mt-[3rem]">A Phygital Porto é uma plataforma inteligente de agendamento de consertos mecânicos, que facilita a vida de donos de veículos ao fornecer precisão na hora de achar a oficina certa para você. Nosso sistema possuí uma Inteligência artificial que analisa os sintomas de seu veículo e fornece um possível problema e orçamento, já te redirecionando a oficinas prontas para consertar seu veículo.</p>
          <div className="flex w-[70%] h-auto justify-between mt-[3rem] font-bold">
            <div className="flex flex-col w-[33.3%] items-center">
              <div className="rounded-full p-4 flex items-center justify-center w-[6.5rem] h-[6.5rem] bg-white bg-opacity-70">
                <FaBalanceScale className=" text-azul text-[3.7rem]"/>
              </div>
              <p className="text-center m-4 ">Obtenha um diagnóstico detalhado e preciso dos problemas do seu veículo, com total confiança</p>
            </div>
            <div className="flex flex-col w-[33.3%] items-center">
              <div className="rounded-full p-4 flex items-center justify-center w-[6.5rem] h-[6.5rem] bg-white bg-opacity-70">
                <FaGears className=" text-azul text-[4rem]"/>
              </div>
              <p className="text-center m-4 ">Obtenha uma estimativa clara e transparente dos custos antes de iniciar qualquer serviço.</p>
            </div>
            <div className="flex flex-col w-[33.3%] items-center">
              <div className="rounded-full p-4 flex items-center justify-center w-[6.5rem] h-[6.5rem] bg-white bg-opacity-70">
                <FaTools className=" text-azul text-[3rem]"/>
              </div>
              <p className="text-center m-4 ">Escolha entre mecânicas qualificadas e altamente recomendadas para um serviço confiável.</p>
            </div>
          </div>  
        </div>
        <div id="sec2" className="w-full bg-green-500 min-h-[100vh] scroll-mt-[3rem]">sec2</div>
        <div id="sec3" className="w-full min-h-[100vh] scroll-mt-[3rem]">sec3</div>
        <div id="sec4" className="w-full bg-green-500 min-h-[100vh] scroll-mt-[3rem]">sec5</div>
        <div id="sec5" className="w-full min-h-[100vh] scroll-mt-[3rem]">sec5</div>
      </div>
    </main>
  );
}
