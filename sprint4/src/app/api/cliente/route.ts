import { getConnection } from "@/config/database";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const request = await req.json();
  console.log("entrou aqui", request);
  if (req.method === "POST") {
    const {
      nome,
      cpf,
      nascimento,
      email,
      tel,
      cep,
      logradouro,
      bairro,
      cidade,
      estado,
      placa,
      modelo,
      ano,
      km,
      sintomas,
    } = request;
    console.log("nome", nome);
    try {
      const conn = await getConnection();

      const dataNascimento = new Date(nascimento).toISOString().split("T")[0];
      console.log(dataNascimento);
      await conn.execute(
        `
        INSERT INTO TBL_Dados_Cliente (nome, cpf, data_nascimento, email, telefone)
        VALUES (:nome, :cpf, TO_DATE(:nascimento, 'YYYY-MM-DD'), :email, :tel)
      `,
        [nome, cpf, dataNascimento, email, tel]
      );

      await conn.execute(
        `
        INSERT INTO TBL_Endereco_Cliente (cep, logradouro, bairro, cidade, estado)
        VALUES (:cep, :logradouro, :bairro, :cidade, :estado)
      `,
        [cep, logradouro, bairro, cidade, estado]
      );

      await conn.execute(
        `
        INSERT INTO TBL_Veiculo_Cliente (placa, modelo, ano, quilometragem, sintomas)
        VALUES (:placa, :modelo, :ano, :km, :sintomas)
      `,
        [placa, modelo, parseInt(ano), parseInt(km), sintomas]
      );

      await conn.commit();
      return NextResponse.json(
        { message: "Dados inseridos com sucesso!" },
        { status: 201 }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { error: "Erro ao inserir dados." },
        { status: 400 }
      );
    }
  } else {
    return NextResponse.json(
      { message: "Método não permitido" },
      { status: 403 }
    );
  }
}
