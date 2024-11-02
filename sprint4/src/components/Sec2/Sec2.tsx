import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

export default function Sec2() {
  const [accordion, setAccordion] = useState(0);

  return (
    <div
      id="sec2"
      className="w-full bg-white dark:bg-cinzaescuro min-h-[calc(100vh-3rem)] scroll-mt-[3rem] flex flex-col tb:justify-between"
    >
      <div className="w-full h-[0.5rem] bg-azul justify-end tb:h-[1rem]"></div>
      <h1 className="font-bold text-xl text-center mt-[1rem] mb-[1rem] dark:text-white tb:text-2xl lp:text-4xl ll:text-6xl">
        Dúvidas Frequentes
      </h1>
      <div className="flex flex-col justify-evenly items-center h-auto tb:flex-row">
        <div className="flex flex-col mb-[1rem] bg-cinza dark:bg-preto w-4/5 h-auto p-[2rem] rounded-3xl justify-evenly gap-1 tb:min-h-[30rem] tb:w-2/5">
          <div
            onClick={() => setAccordion(accordion === 1 ? 0 : 1)}
            className={`p-4 border-2 border-azul rounded-2xl mb-2 cursor-pointer bg-white dark:bg-cinzaescuro transition-all duration-700`}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-base font-bold tb:text-lg">
                Quais informações são necessárias para o diagnóstico?
              </h3>
              <FaAngleDown
                className={`transform transition-transform duration-500 ${
                  accordion === 1 ? "rotate-180" : ""
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-700 ${
                accordion === 1
                  ? "max-h-[300px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="mt-2 text-black dark:text-white text-sm tb:text-base">
                Para um diagnóstico mais preciso, forneça detalhes sobre os
                sintomas que seu veículo está apresentando, o modelo e o ano do
                carro, e, se possível, o histórico de manutenção. Quanto mais
                informações você fornecer, mais preciso será o diagnóstico
                preliminar.
              </p>
            </div>
          </div>
          <div
            onClick={() => setAccordion(accordion === 2 ? 0 : 2)}
            className={`p-4 border-2 border-azul rounded-2xl mb-2 cursor-pointer bg-white dark:bg-cinzaescuro transition-all duration-700`}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-base font-bold tb:text-lg">
                Como são escolhidas as mecânicas parceiras?
              </h3>
              <FaAngleDown
                className={`transform transition-transform duration-500 ${
                  accordion === 2 ? "rotate-180" : ""
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-700 ${
                accordion === 2
                  ? "max-h-[300px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="mt-2 text-black dark:text-white text-sm tb:text-base">
                Selecionamos nossas mecânicas parceiras com base em critérios
                rigorosos, incluindo certificações, experiência, e avaliações de
                clientes. Apenas mecânicas que atendem aos nossos padrões de
                qualidade e confiabilidade são incluídas em nossa rede.
              </p>
            </div>
          </div>
          <div
            onClick={() => setAccordion(accordion === 3 ? 0 : 3)}
            className={`p-4 border-2 border-azul rounded-2xl mb-2 cursor-pointer bg-white dark:bg-cinzaescuro transition-all duration-700`}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-base font-bold tb:text-lg">
                Como meus dados são protegidos?
              </h3>
              <FaAngleDown
                className={`transform transition-transform duration-500 ${
                  accordion === 3 ? "rotate-180" : ""
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-700 ${
                accordion === 3
                  ? "max-h-[300px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="mt-2 text-black dark:text-white text-sm tb:text-base">
                Levamos a proteção de dados muito a sério. Todos os dados que
                você fornece são criptografados e armazenados de acordo com as
                leis de proteção de dados vigentes. Apenas informações
                necessárias para o diagnóstico e o agendamento são
                compartilhadas com as mecânicas parceiras.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-[1rem] bg-cinza dark:bg-preto w-4/5 h-auto p-[2rem] rounded-3xl justify-evenly gap-1 tb:min-h-[30rem] tb:w-2/5">
          <div
            onClick={() => setAccordion(accordion === 4 ? 0 : 4)}
            className={`p-4 border-2 border-azul rounded-2xl mb-2 cursor-pointer bg-white dark:bg-cinzaescuro transition-all duration-700`}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-base font-bold tb:text-lg">
                Existe um custo para usar o sistema?
              </h3>
              <FaAngleDown
                className={`transform transition-transform duration-500 ${
                  accordion === 4 ? "rotate-180" : ""
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-700 ${
                accordion === 4
                  ? "max-h-[300px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="mt-2 text-black dark:text-white text-sm tb:text-base">
                O uso do nosso sistema para diagnóstico e recomendação de
                mecânicas é gratuito para os clientes. Eventuais custos
                relacionados ao serviço de reparo ou manutenção são diretamente
                cobrados pela mecânica escolhida.
              </p>
            </div>
          </div>
          <div
            onClick={() => setAccordion(accordion === 5 ? 0 : 5)}
            className={`p-4 border-2 border-azul rounded-2xl mb-2 cursor-pointer bg-white dark:bg-cinzaescuro transition-all duration-700`}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-base font-bold tb:text-lg">
                Como posso entrar em contato com o suporte?
              </h3>
              <FaAngleDown
                className={`transform transition-transform duration-500 ${
                  accordion === 5 ? "rotate-180" : ""
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-700 ${
                accordion === 5
                  ? "max-h-[300px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="mt-2 text-black dark:text-white text-sm tb:text-base">
                Você pode entrar em contato com nosso suporte através do
                formulário de contato disponível em nosso site, ou enviando um
                e-mail para (phygitalporto@gmail.com). Também oferecemos suporte
                via chat ao vivo durante o horário comercial.
              </p>
            </div>
          </div>
          <div
            onClick={() => setAccordion(accordion === 6 ? 0 : 6)}
            className={`p-4 border-2 border-azul rounded-2xl mb-2 cursor-pointer bg-white dark:bg-cinzaescuro transition-all duration-300`}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-base font-bold tb:text-lg">
                O que fazer se não encontrar uma mecânica perto de mim?
              </h3>
              <FaAngleDown
                className={`transform transition-transform duration-500 ${
                  accordion === 6 ? "rotate-180" : ""
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                accordion === 6
                  ? "max-h-[300px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="mt-2 text-black dark:text-white text-sm tb:text-base">
                Se você não encontrar uma mecânica próxima à sua localização, é
                possível que ainda não tenhamos uma parceira na sua área. Entre
                em contato com nosso suporte para verificar outras opções ou
                para solicitar a inclusão de uma nova mecânica em nossa rede.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[0.5rem] bg-azul justify-end tb:h-[1rem]"></div>
    </div>
  );
}
