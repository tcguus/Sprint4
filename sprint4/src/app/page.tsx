"use client"

import Image from 'next/image';
import Link from "next/link";
import { useState } from 'react';
import { FaBalanceScale, FaTools } from "react-icons/fa";
import { FaAngleDown, FaGears } from "react-icons/fa6";
import { MdOutlinePlace } from "react-icons/md";

export default function Home() {
  const [accordion, setAccordion] = useState(0);

  return (
    <main>
      <nav className="h-[3rem] flex w-full sticky top-0 bg-white dark:bg-escuro border-b-cinza border-b-2 dark:border-cinzaescuro transition duration-300">
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
      <div className="flex flex-col w-full">
        <div className="w-full flex flex-col items-center text-white bg-bannerImg bg-no-repeat bg-cover bg-opacity-50 min-h-[calc(100vh-7rem)]">
          <h1 className="text-4xl font-bold mt-[3rem]">O que oferecemos?</h1>
          <p className="text-center w-[70%] font-semibold text-xl mt-[3rem]">A Phygital Porto é uma plataforma inteligente de agendamento de consertos mecânicos, que facilita a vida de donos de veículos ao fornecer precisão na hora de achar a oficina certa para você. Nosso sistema possuí uma Inteligência artificial que analisa os sintomas de seu veículo e fornece um possível problema e orçamento, já te redirecionando a oficinas prontas para consertar seu veículo.</p>
          <div className="flex w-[70%] h-auto justify-between mt-[3rem] font-bold">
            <div className="flex flex-col w-[33.3%] items-center">
              <div className="rounded-full p-4 flex items-center justify-center w-[6.5rem] h-[6.5rem] bg-white dark:bg-preto transition duration-300 bg-opacity-70 dark:bg-opacity-90">
                <FaBalanceScale className="text-azul text-[3.7rem]" />
              </div>
              <p className="text-center m-4">Obtenha um diagnóstico detalhado e preciso dos problemas do seu veículo, com total confiança</p>
            </div>
            <div className="flex flex-col w-[33.3%] items-center">
              <div className="rounded-full p-4 flex items-center justify-center w-[6.5rem] h-[6.5rem] bg-white dark:bg-preto transition duration-300 bg-opacity-70 dark:bg-opacity-90">
                <FaGears className="text-azul text-[4rem]" />
              </div>
              <p className="text-center m-4">Obtenha uma estimativa clara e transparente dos custos antes de iniciar qualquer serviço.</p>
            </div>
            <div className="flex flex-col w-[33.3%] items-center">
              <div className="rounded-full p-4 flex items-center justify-center w-[6.5rem] h-[6.5rem] bg-white dark:bg-preto  transition duration-300 dark:bg-opacity-90 bg-opacity-70">
                <FaTools className="text-azul text-[3rem]" />
              </div>
              <p className="text-center m-4">Escolha entre mecânicas qualificadas e altamente recomendadas para um serviço confiável.</p>
            </div>
          </div>
        </div>
        <div id="sec2" className="w-full bg-white dark:bg-cinzaescuro min-h-[calc(100vh-3rem)] scroll-mt-[3rem] flex flex-col">
          <div className="w-full h-[1rem] bg-azul justify-end"></div>
          <h1 className="font-bold text-4xl text-center mt-[2rem] dark:text-white">Dúvidas Frequentes</h1>
          <div className="flex mt-auto mb-auto justify-evenly">
            <div className='flex flex-col bg-cinza dark:bg-preto w-[40%] h-[60vh] p-[2rem] rounded-3xl justify-evenly'>
              <div
                onClick={() => setAccordion(accordion === 1 ? 0 : 1)}
                className={`p-4 border-2 border-azul rounded-2xl mb-2 cursor-pointer bg-white dark:bg-cinzaescuro transition-all duration-700`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold">Quais informações são necessárias para o diagnóstico?</h3>
                  <FaAngleDown className={`transform transition-transform duration-500 ${accordion === 1 ? "rotate-180" : ""}`} />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-700 ${accordion === 1 ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="mt-2 text-black dark:text-white">
                    Para um diagnóstico mais preciso, forneça detalhes sobre os sintomas que seu veículo está apresentando, o modelo e o ano do carro, e, se possível, o histórico de manutenção. Quanto mais informações você fornecer, mais preciso será o diagnóstico preliminar.
                  </p>
                </div>
              </div>
              <div
                onClick={() => setAccordion(accordion === 2 ? 0 : 2)}
                className={`p-4 border-2 border-azul rounded-2xl mb-2 cursor-pointer bg-white dark:bg-cinzaescuro transition-all duration-700`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold">Como são escolhidas as mecânicas parceiras?</h3>
                  <FaAngleDown className={`transform transition-transform duration-500 ${accordion === 2 ? "rotate-180" : ""}`} />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-700 ${accordion === 2 ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="mt-2 text-black dark:text-white">
                    Selecionamos nossas mecânicas parceiras com base em critérios rigorosos, incluindo certificações, experiência, e avaliações de clientes. Apenas mecânicas que atendem aos nossos padrões de qualidade e confiabilidade são incluídas em nossa rede.
                  </p>
                </div>
              </div>
              <div
                onClick={() => setAccordion(accordion === 3 ? 0 : 3)}
                className={`p-4 border-2 border-azul rounded-2xl mb-2 cursor-pointer bg-white dark:bg-cinzaescuro transition-all duration-700`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold">Como meus dados são protegidos?</h3>
                  <FaAngleDown className={`transform transition-transform duration-500 ${accordion === 3 ? "rotate-180" : ""}`} />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-700 ${accordion === 3 ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="mt-2 text-black dark:text-white">
                    Levamos a proteção de dados muito a sério. Todos os dados que você fornece são criptografados e armazenados de acordo com as leis de proteção de dados vigentes. Apenas informações necessárias para o diagnóstico e o agendamento são compartilhadas com as mecânicas parceiras.
                  </p>
                </div>
              </div>
            </div>
            <div className='flex flex-col bg-cinza dark:bg-preto w-[40%] p-[2rem] rounded-3xl justify-evenly'>
              <div
                onClick={() => setAccordion(accordion === 4 ? 0 : 4)}
                className={`p-4 border-2 border-azul rounded-2xl mb-2 cursor-pointer bg-white dark:bg-cinzaescuro transition-all duration-700`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold">Existe um custo para usar o sistema?</h3>
                  <FaAngleDown className={`transform transition-transform duration-500 ${accordion === 4 ? "rotate-180" : ""}`} />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-700 ${accordion === 4 ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="mt-2 text-black dark:text-white">
                    O uso do nosso sistema para diagnóstico e recomendação de mecânicas é gratuito para os clientes. Eventuais custos relacionados ao serviço de reparo ou manutenção são diretamente cobrados pela mecânica escolhida.
                  </p>
                </div>
              </div>
              <div
                onClick={() => setAccordion(accordion === 5 ? 0 : 5)}
                className={`p-4 border-2 border-azul rounded-2xl mb-2 cursor-pointer bg-white dark:bg-cinzaescuro transition-all duration-700`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold">Como posso entrar em contato com o suporte?</h3>
                  <FaAngleDown className={`transform transition-transform duration-500 ${accordion === 5 ? "rotate-180" : ""}`} />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-700 ${accordion === 5 ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="mt-2 text-black dark:text-white">
                    Você pode entrar em contato com nosso suporte através do formulário de contato disponível em nosso site, ou enviando um e-mail para (phygitalporto@gmail.com). Também oferecemos suporte via chat ao vivo durante o horário comercial.
                  </p>
                </div>
              </div>
              <div
                onClick={() => setAccordion(accordion === 6 ? 0 : 6)}
                className={`p-4 border-2 border-azul rounded-2xl mb-2 cursor-pointer bg-white dark:bg-cinzaescuro transition-all duration-300`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold">O que fazer se não encontrar uma mecânica perto de mim?</h3>
                  <FaAngleDown className={`transform transition-transform duration-500 ${accordion === 6 ? "rotate-180" : ""}`} />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ${accordion === 6 ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="mt-2 text-black dark:text-white">
                    Se você não encontrar uma mecânica próxima à sua localização, é possível que ainda não tenhamos uma parceira na sua área. Entre em contato com nosso suporte para verificar outras opções ou para solicitar a inclusão de uma nova mecânica em nossa rede.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[1rem] bg-azul justify-end mt-auto"></div>
        </div>
        <div id="sec3" className="w-full bg-cinza dark:bg-cinzaescuro min-h-[calc(100vh-3rem)] scroll-mt-[3rem] flex justify-center items-center">
          <div className='w-[95%] bg-white dark:bg-preto rounded-2xl'>
            <h1 className='text-3xl text-center font-bold mt-[2rem] mb-[2rem]'>Relate seu problema, <br />
              preencha o formulário abaixo:</h1>
            <form action="" className='flex flex-col'>
              <div className='flex justify-evenly'>
                <div className='border-preto dark:border-white border-[2px] rounded-xl p-4 flex flex-col w-[28%]'>
                  <h3 className='text-xl font-bold '>Seus dados:</h3>
                  <label className='text-lg font-bold' htmlFor="nome">Nome:</label>
                  <input className='dark:bg-preto border-[1px] border-azul rounded-md p-2' type="text" id="nome" name="nome" placeholder="Digite seu nome..." required></input>

                  <label className='text-lg font-bold' htmlFor="cpf">CPF:</label>
                  <input className='dark:bg-preto border-[1px] border-azul rounded-md p-2' type="text" id="cpf" name="cpf" placeholder="Digite seu CPF..." required></input>

                  <label className='text-lg font-bold' htmlFor="nascimento">Data de Nascimento:</label>
                  <input className='dark:bg-preto border-[1px] border-azul rounded-md p-2' type="date" id="nascimento" name="nascimento" required min="1900-01-01" max="2006-31-12"></input>

                  <label className='text-lg font-bold' htmlFor="email">E-mail:</label>
                  <input className='dark:bg-preto border-[1px] border-azul rounded-md p-2' type="email" id="email" name="email" placeholder="Digite seu e-mail..." required></input>

                  <label className='text-lg font-bold' htmlFor="tel">Telefone:</label>
                  <input className='dark:bg-preto border-[1px] border-azul rounded-md p-2' type="tel" id="tel" name="tel" placeholder="Digite seu telefone..." required></input>
                </div>
                <div className='border-preto dark:border-white border-[2px] rounded-xl p-4 flex flex-col w-[28%]'>
                  <h3 className='text-xl font-bold'>Endereço:</h3>
                  <label className='text-lg font-bold' htmlFor="cep">CEP:</label>
                  <input className='dark:bg-preto border-[1px] border-azul rounded-md p-2' type="number" id="cep" name="cep" placeholder="Digite seu CEP..." required></input>

                  <label className='text-lg font-bold' htmlFor="logradouro">Logradouro:</label>
                  <input className='dark:bg-preto border-[1px] border-azul rounded-md p-2' type="text" id="logradouro" name="logradouro" placeholder="Digite seu logradouro..." required></input>

                  <label className='text-lg font-bold' htmlFor="bairro">Data de Bairro:</label>
                  <input className='dark:bg-preto border-[1px] border-azul rounded-md p-2' type="text" id="bairro" name="bairro" placeholder="Digite seu bairro..."></input>

                  <label className='text-lg font-bold' htmlFor="cidade">Cidade</label>
                  <input className='dark:bg-preto border-[1px] border-azul rounded-md p-2' type="text" id="cidade" name="cidade" placeholder="Digite sua cidade..." required></input>

                  <label className='text-lg font-bold' htmlFor="estado">Estado:</label>
                  <input className='dark:bg-preto border-[1px] border-azul rounded-md p-2' type="text" id="estado" name="estado" placeholder="Digite seu estado..." required></input>
                </div>
                <div className='border-preto dark:border-white border-[2px] rounded-xl p-4 flex flex-col w-[28%]'>
                  <h3 className='text-xl font-bold'>Veículo:</h3>
                  <label className='text-lg font-bold' htmlFor="placa">Placa:</label>
                  <input className='dark:bg-preto border-[1px] border-azul rounded-md p-2' type="text" id="placa" name="placa" placeholder="Digite a placa..." required></input>

                  <label className='text-lg font-bold' htmlFor="modelo">Modelo:</label>
                  <input className='dark:bg-preto border-[1px] border-azul rounded-md p-2' type="text" id="modelo" name="modelo" placeholder="Digite o modelo..." required></input>

                  <label className='text-lg font-bold' htmlFor="ano">Ano:</label>
                  <input className=' dark:bg-preto border-[1px] border-azul rounded-md p-2' type="number" id="ano" name="ano" min="1900" max="2100" placeholder="Digite o ano..." required></input>

                  <label className='text-lg font-bold' htmlFor="km">Kilometragem:</label>
                  <input className='dark:bg-preto border-[1px] border-azul rounded-md p-2' type="text" id="km" name="km" placeholder="Digite a kilometragem..." required></input>

                  <label className='text-lg font-bold' htmlFor="sintomas">Sintomas apresentados:</label>
                  <input className='dark:bg-preto border-[1px] border-azul rounded-md p-2' type="text" id="sintomas" name="sintomas" placeholder="Digite os sintomas apresentados..." required></input>
                </div>
              </div>
              <button className='w-[7rem] p-2 rounded-xl font-bold bg-azul text-white text-2xl mt-[2rem] mb-[2rem] ml-auto mr-auto'>Enviar!</button>
            </form>
          </div>
        </div>
        <div id="sec4" className="w-full bg-white dark:bg-preto flex min-h-[calc(100vh-3rem)] scroll-mt-[3rem]">
          <div className='w-[50%] flex flex-col justify-center items-center min-h-[calc(100vh-3rem)]'>
            <h1 className='font-bold text-3xl text-center'>Encontre a Oficina da Porto mais próxima de você!</h1>
            <Image
              src="/loc-branco.svg"
              alt="Localização"
              width={600}
              height={300}
              className="mt-[1.5rem]"
            />
          </div>
          <div className='w-[50%] flex justify-center items-center'>
            <div className="space-y-6 overflow-auto overflow-y-scroll items-center w-[60%] h-[40rem] flex-grow flex flex-col m-auto">
              <div className="p-4 bg-gray-100 dark:bg-cinzaescuro w-[60%] rounded shadow">
                <h3 className="text-lg font-semibold">Reycar</h3>
                <p className='flex'>
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
                <p className='flex'>
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
                <p className='flex'>
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
                <p className='flex'>
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
                <p className='flex'>
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
                <h3 className="text-lg font-semibold">Ribeiro Renovadora de Veículos</h3>
                <p className='flex'>
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
                <p className='flex'>
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
                <p className='flex'>
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
                <p className='flex'>
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
                <h3 className="text-lg font-semibold">Nicola Garage Serviços Automotivos</h3>
                <p className='flex'>
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
                <h3 className="text-lg font-semibold">Oficina 4 Rodas Mais - Funilaria Express</h3>
                <p className='flex'>
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
        <div id="sec5" className="w-full bg-white dark:bg-preto flex flex-col min-h-[calc(100vh-3rem)] scroll-mt-[3rem]">
          <div className="w-full h-[1rem] bg-azul justify-end"></div>
          <h1 className='text-azul text-5xl font-bold text-center mt-[3rem]'>Conheça os nossos integrantes!</h1>
          <div className='flex justify-evenly mt-auto mb-auto dark:text-white'>
            <div className='w-[33.3%]  h-auto flex flex-col items-center'>
              <Image
                src="/integrante-gustavo.jpeg"
                width="250"
                height="250"
                alt='Integrante Gustavo'
                className='rounded-full border-4 border-azul'
              />
              <h3 className='font-bold text-2xl'>Gustavo Camargo de Andrade</h3>
              <p className='font-semibold text-lg'>RM555562</p>
              <p className='font-semibold text-lg'>1TDSPF</p>
              <Link
                href="https://github.com/tcguus"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto transition duration-300 font-semibold text-lg hover:text-azul hover:underline">https://github.com/tcguus
              </Link>
            </div>
            <div className='w-[33.3%]  h-auto flex flex-col items-center'>
              <Image
                src="/integrante-leonardo.jpeg"
                width="250"
                height="250"
                alt='Integrante Leonardo'
                className='rounded-full border-4 border-azul'
              />
              <h3 className='font-bold text-2xl'>Leonardo César Nascimento</h3>
              <p className='font-semibold text-lg'>RM558373</p>
              <p className='font-semibold text-lg'>1TDSPF</p>
              <Link
                href="https://github.com/leoc7sar"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto transition duration-300 font-semibold text-lg hover:text-azul hover:underline">https://github.com/leoc7sar
              </Link>
            </div>
            <div className='w-[33.3%]  h-auto flex flex-col items-center'>
              <Image
                src="/integrante-rodrigo.jpeg"
                width="250"
                height="250"
                alt='Integrante Rodrigo'
                className='rounded-full border-4 border-azul'
              />
              <h3 className='font-bold text-2xl'>Rodrigo Souza Mantovanello</h3>
              <p className='font-semibold text-lg'>RM555451</p>
              <p className='font-semibold text-lg'>1TDSPF</p>
              <Link
                href="https://github.com/rsmanto"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto transition duration-300 font-semibold text-lg hover:text-azul hover:underline">https://github.com/rsmanto
              </Link>
            </div>
          </div>
          <div className="w-full h-[1rem] bg-azul justify-end mt-auto"></div>
        </div>
      </div>
    </main>
  );
}
