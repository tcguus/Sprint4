import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

export default function Sec2() {
  const [accordion, setAccordion] = useState(0);

  return (
    <div
      id="sec2"
      className="w-full bg-white dark:bg-cinzaescuro min-h-[calc(100vh-3rem)] scroll-mt-[3rem] flex flex-col"
    >
      <div className="w-full h-[1rem] bg-azul justify-end"></div>
      <h1 className="font-bold text-4xl text-center mt-[2rem] dark:text-white">
        Dúvidas Frequentes
      </h1>
      <div className="flex mt-auto mb-auto justify-evenly">
        <div className="flex flex-col bg-cinza dark:bg-preto w-[40%] h-[60vh] p-[2rem] rounded-3xl justify-evenly">
          <div
            onClick={() => setAccordion(accordion === 1 ? 0 : 1)}
            className={`p-4 border-2 border-azul rounded-2xl mb-2 cursor-pointer bg-white dark:bg-cinzaescuro transition-all duration-700`}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold">
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
              <p className="mt-2 text-black dark:text-white">
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
              <h3 className="text-lg font-bold">
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
              <p className="mt-2 text-black dark:text-white">
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
              <h3 className="text-lg font-bold">
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
              <p className="mt-2 text-black dark:text-white">
                Levamos a proteção de dados muito a sério. Todos os dados que
                você fornece são criptografados e armazenados de acordo com as
                leis de proteção de dados vigentes. Apenas informações
                necessárias para o diagnóstico e o agendamento são
                compartilhadas com as mecânicas parceiras.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-cinza dark:bg-preto w-[40%] p-[2rem] rounded-3xl justify-evenly">
          <div
            onClick={() => setAccordion(accordion === 4 ? 0 : 4)}
            className={`p-4 border-2 border-azul rounded-2xl mb-2 cursor-pointer bg-white dark:bg-cinzaescuro transition-all duration-700`}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold">
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
              <p className="mt-2 text-black dark:text-white">
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
              <h3 className="text-lg font-bold">
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
              <p className="mt-2 text-black dark:text-white">
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
              <h3 className="text-lg font-bold">
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
              <p className="mt-2 text-black dark:text-white">
                Se você não encontrar uma mecânica próxima à sua localização, é
                possível que ainda não tenhamos uma parceira na sua área. Entre
                em contato com nosso suporte para verificar outras opções ou
                para solicitar a inclusão de uma nova mecânica em nossa rede.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1rem] bg-azul justify-end mt-auto"></div>
    </div>
  );
}
