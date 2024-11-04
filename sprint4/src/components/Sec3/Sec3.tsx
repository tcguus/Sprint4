import { useState } from "react";

export default function Sec3() {
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    nascimento: "",
    email: "",
    tel: "",
    cep: "",
    logradouro: "",
    bairro: "",
    cidade: "",
    estado: "",
    placa: "",
    modelo: "",
    ano: "",
    km: "",
    sintomas: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("dadosFormulario", JSON.stringify(formData));
    console.log("Formulário enviado com sucesso!");
    setFormData({
      nome: "",
      cpf: "",
      nascimento: "",
      email: "",
      tel: "",
      cep: "",
      logradouro: "",
      bairro: "",
      cidade: "",
      estado: "",
      placa: "",
      modelo: "",
      ano: "",
      km: "",
      sintomas: "",
    });
  };
  return (
    <div
      id="sec3"
      className="w-full bg-cinza dark:bg-cinzaescuro min-h-[calc(100vh-3rem)] scroll-mt-[3rem] flex justify-center items-center"
    >
      <div className="w-[95%] bg-white mt-[1rem] mb-[1rem] dark:bg-preto rounded-2xl">
        <h1 className="text-xl text-center font-bold mt-[2rem] mb-[2rem] tb:text-3xl">
          Relate seu problema, <br />
          preencha o formulário abaixo:
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex flex-col gap-4 justify-evenly items-center tb:flex-row tb:items-stretch tb:gap-0">
            <div className="border-preto dark:border-white border-[2px] rounded-xl p-4 flex flex-col w-[70%] tb:w-[28%]">
              <h3 className="text-xl font-bold">Seus dados:</h3>
              <label className="text-lg font-bold" htmlFor="nome">
                Nome:
              </label>
              <input
                className="dark:bg-preto border-[1px] border-azul rounded-md p-2"
                type="text"
                id="nome"
                name="nome"
                placeholder="Digite seu nome..."
                value={formData.nome}
                onChange={handleChange}
                required
              />
              <label className="text-lg font-bold" htmlFor="cpf">
                CPF:
              </label>
              <input
                className="dark:bg-preto border-[1px] border-azul rounded-md p-2"
                type="text"
                id="cpf"
                name="cpf"
                placeholder="Digite seu CPF..."
                value={formData.cpf}
                onChange={handleChange}
                required
              />
              <label className="text-lg font-bold" htmlFor="nascimento">
                Data de Nascimento:
              </label>
              <input
                className="dark:bg-preto border-[1px] border-azul rounded-md p-2"
                type="date"
                id="nascimento"
                name="nascimento"
                value={formData.nascimento}
                onChange={handleChange}
                required
                min="1900-01-01"
                max="2006-12-31"
              />
              <label className="text-lg font-bold" htmlFor="email">
                E-mail:
              </label>
              <input
                className="dark:bg-preto border-[1px] border-azul rounded-md p-2"
                type="email"
                id="email"
                name="email"
                placeholder="Digite seu e-mail..."
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label className="text-lg font-bold" htmlFor="tel">
                Telefone:
              </label>
              <input
                className="dark:bg-preto border-[1px] border-azul rounded-md p-2"
                type="tel"
                id="tel"
                name="tel"
                placeholder="Digite seu telefone..."
                value={formData.tel}
                onChange={handleChange}
                required
              />
            </div>
            <div className="border-preto dark:border-white border-[2px] rounded-xl p-4 flex flex-col w-[70%] tb:w-[28%]">
              <h3 className="text-xl font-bold">Endereço:</h3>
              <label className="text-lg font-bold" htmlFor="cep">
                CEP:
              </label>
              <input
                className="dark:bg-preto border-[1px] border-azul rounded-md p-2"
                type="number"
                id="cep"
                name="cep"
                placeholder="Digite seu CEP..."
                value={formData.cep}
                onChange={handleChange}
                required
              />
              <label className="text-lg font-bold" htmlFor="logradouro">
                Logradouro:
              </label>
              <input
                className="dark:bg-preto border-[1px] border-azul rounded-md p-2"
                type="text"
                id="logradouro"
                name="logradouro"
                placeholder="Digite seu logradouro..."
                value={formData.logradouro}
                onChange={handleChange}
                required
              />
              <label className="text-lg font-bold" htmlFor="bairro">
                Bairro:
              </label>
              <input
                className="dark:bg-preto border-[1px] border-azul rounded-md p-2"
                type="text"
                id="bairro"
                name="bairro"
                placeholder="Digite seu bairro..."
                value={formData.bairro}
                onChange={handleChange}
              />
              <label className="text-lg font-bold" htmlFor="cidade">
                Cidade:
              </label>
              <input
                className="dark:bg-preto border-[1px] border-azul rounded-md p-2"
                type="text"
                id="cidade"
                name="cidade"
                placeholder="Digite sua cidade..."
                value={formData.cidade}
                onChange={handleChange}
                required
              />
              <label className="text-lg font-bold" htmlFor="estado">
                Estado:
              </label>
              <input
                className="dark:bg-preto border-[1px] border-azul rounded-md p-2"
                type="text"
                id="estado"
                name="estado"
                placeholder="Digite seu estado..."
                value={formData.estado}
                onChange={handleChange}
                required
              />
            </div>
            <div className="border-preto dark:border-white border-[2px] rounded-xl p-4 flex flex-col w-[70%] tb:w-[28%]">
              <h3 className="text-xl font-bold">Veículo:</h3>
              <label className="text-lg font-bold" htmlFor="placa">
                Placa:
              </label>
              <input
                className="dark:bg-preto border-[1px] border-azul rounded-md p-2"
                type="text"
                id="placa"
                name="placa"
                placeholder="Digite a placa..."
                value={formData.placa}
                onChange={handleChange}
                required
              />
              <label className="text-lg font-bold" htmlFor="modelo">
                Modelo:
              </label>
              <input
                className="dark:bg-preto border-[1px] border-azul rounded-md p-2"
                type="text"
                id="modelo"
                name="modelo"
                placeholder="Digite o modelo..."
                value={formData.modelo}
                onChange={handleChange}
                required
              />
              <label className="text-lg font-bold" htmlFor="ano">
                Ano:
              </label>
              <input
                className="dark:bg-preto border-[1px] border-azul rounded-md p-2"
                type="number"
                id="ano"
                name="ano"
                placeholder="Digite o ano..."
                value={formData.ano}
                onChange={handleChange}
                min="1900"
                max="2100"
                required
              />
              <label className="text-lg font-bold" htmlFor="km">
                Kilometragem:
              </label>
              <input
                className="dark:bg-preto border-[1px] border-azul rounded-md p-2"
                type="text"
                id="km"
                name="km"
                placeholder="Digite a kilometragem..."
                value={formData.km}
                onChange={handleChange}
                required
              />
              <label className="text-lg font-bold" htmlFor="sintomas">
                Sintomas apresentados:
              </label>
              <input
                className="dark:bg-preto border-[1px] border-azul rounded-md p-2"
                type="text"
                id="sintomas"
                name="sintomas"
                placeholder="Digite os sintomas apresentados..."
                value={formData.sintomas}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-[7rem] p-2 rounded-xl font-bold bg-azul text-white text-2xl mt-[2rem] mb-[2rem] ml-auto mr-auto"
          >
            Enviar!
          </button>
        </form>
      </div>
    </div>
  );
}
