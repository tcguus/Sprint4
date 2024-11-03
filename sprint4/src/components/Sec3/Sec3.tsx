import { FormEvent, useState } from "react";

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
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
    try {
      const response = await fetch("/api/cliente", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        alert(result.message);
      } else {
        alert(result.error || "Erro ao enviar o formulário");
      }
    } catch (error) {
      console.error(error);
    }
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
        <form action="" className="flex flex-col" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 justify-evenly items-center tb:flex-row tb:items-stretch tb:gap-0">
            <div className="border-preto dark:border-white border-[2px] rounded-xl p-4 flex flex-col w-[70%] tb:w-[28%]">
              <h3 className="text-xl font-bold ">Seus dados:</h3>
              <label className="text-lg font-bold" htmlFor="nome">
                Nome:
              </label>
              <input
                className="dark:bg-preto border-[1px] border-azul rounded-md p-2"
                type="text"
                id="nome"
                name="nome"
                placeholder="Digite seu nome..."
                required
                value={formData.nome}
                onChange={(e) =>
                  setFormData({ ...formData, nome: e.target.value })
                }
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
                required
                value={formData.cpf}
                onChange={(e) =>
                  setFormData({ ...formData, cpf: e.target.value })
                }
              />
              <label className="text-lg font-bold" htmlFor="nascimento">
                Data de Nascimento:
              </label>
              <input
                className="dark:bg-preto border-[1px] border-azul rounded-md p-2"
                type="date"
                id="nascimento"
                name="nascimento"
                required
                min="1900-01-01"
                max="2006-31-12"
                value={formData.nascimento}
                onChange={(e) =>
                  setFormData({ ...formData, nascimento: e.target.value })
                }
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
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
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
                required
                value={formData.tel}
                onChange={(e) =>
                  setFormData({ ...formData, tel: e.target.value })
                }
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
                required
                value={formData.cep}
                onChange={(e) =>
                  setFormData({ ...formData, cep: e.target.value })
                }
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
                required
                value={formData.logradouro}
                onChange={(e) =>
                  setFormData({ ...formData, logradouro: e.target.value })
                }
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
                onChange={(e) =>
                  setFormData({ ...formData, bairro: e.target.value })
                }
              />
              <label className="text-lg font-bold" htmlFor="cidade">
                Cidade
              </label>
              <input
                className="dark:bg-preto border-[1px] border-azul rounded-md p-2"
                type="text"
                id="cidade"
                name="cidade"
                placeholder="Digite sua cidade..."
                required
                value={formData.cidade}
                onChange={(e) =>
                  setFormData({ ...formData, cidade: e.target.value })
                }
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
                required
                value={formData.estado}
                onChange={(e) =>
                  setFormData({ ...formData, estado: e.target.value })
                }
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
                required
                value={formData.placa}
                onChange={(e) =>
                  setFormData({ ...formData, placa: e.target.value })
                }
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
                required
                value={formData.modelo}
                onChange={(e) =>
                  setFormData({ ...formData, modelo: e.target.value })
                }
              />
              <label className="text-lg font-bold" htmlFor="ano">
                Ano:
              </label>
              <input
                className=" dark:bg-preto border-[1px] border-azul rounded-md p-2"
                type="number"
                id="ano"
                name="ano"
                min="1900"
                max="2100"
                placeholder="Digite o ano..."
                required
                value={formData.ano}
                onChange={(e) =>
                  setFormData({ ...formData, ano: e.target.value })
                }
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
                required
                value={formData.km}
                onChange={(e) =>
                  setFormData({ ...formData, km: e.target.value })
                }
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
                required
                value={formData.sintomas}
                onChange={(e) =>
                  setFormData({ ...formData, sintomas: e.target.value })
                }
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
