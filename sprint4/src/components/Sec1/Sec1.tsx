import { FaBalanceScale, FaTools } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";

export default function Sec1() {
  return (
    <div className="w-full flex flex-col items-center text-white bg-bannerImg bg-no-repeat bg-cover bg-opacity-50 min-h-[calc(100vh-7rem)]">
      <div className="mt-auto w-full mb-auto flex flex-col items-center">
        <h1 className="text-3xl font-bold mt-[2rem] ll:text-6xl bg-gradient-to-r from-azul to-azulescuro p-1 rounded-xl ml:p-3">O que oferecemos?</h1>
        <p className="text-center w-[90%] font-semibold text-base mt-[3rem] tb:text-xl lp:w-[70%] lp:text-2xl ll:w-[85%] ll:text-3xl ">
          A Phygital Porto é uma plataforma inteligente de agendamento de
          consertos mecânicos, que facilita a vida de donos de veículos ao
          fornecer precisão na hora de achar a oficina certa para você. Nosso
          sistema possuí uma Inteligência artificial que analisa os sintomas de
          seu veículo e fornece um possível problema e orçamento, já te
          redirecionando a oficinas prontas para consertar seu veículo.
        </p>
        <div className="flex flex-col items-center w- h-auto justify-evenly mt-[3rem] font-bold tb:flex-row">
          <div className="flex flex-col w-full items-center tb:w-[20%]">
            <div className="rounded-full p-4 flex items-center justify-center w-[6.5rem] h-[6.5rem] bg-white dark:bg-preto transition duration-300 bg-opacity-70 dark:bg-opacity-90">
              <FaBalanceScale className="text-azul text-[3.7rem]" />
            </div>
            <p className="text-center m-4 ll:text-2xl">
              Obtenha um diagnóstico detalhado e preciso dos problemas do seu
              veículo, com total confiança
            </p>
          </div>
          <div className="flex flex-col w-full items-center tb:w-[20%]">
            <div className="rounded-full p-4 flex items-center justify-center w-[6.5rem] h-[6.5rem] bg-white dark:bg-preto transition duration-300 bg-opacity-70 dark:bg-opacity-90">
              <FaGears className="text-azul text-[4rem]" />
            </div>
            <p className="text-center m-4 ll:text-2xl">
              Obtenha uma estimativa clara e transparente dos custos antes de
              iniciar qualquer serviço.
            </p>
          </div>
          <div className="flex flex-col w-full items-center tb:w-[20%]">
            <div className="rounded-full p-4 flex items-center justify-center w-[6.5rem] h-[6.5rem] bg-white dark:bg-preto  transition duration-300 dark:bg-opacity-90 bg-opacity-70">
              <FaTools className="text-azul text-[3rem]" />
            </div>
            <p className="text-center m-4 ll:text-2xl">
              Escolha entre mecânicas qualificadas e altamente recomendadas para
              um serviço confiável.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
