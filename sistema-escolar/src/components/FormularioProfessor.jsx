import { useState } from "react";
import CampoTexto from "./CampoTexto";

function FormularioProfessor({ aoSalvar }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [dataAdmissao, setDataAdmissao] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    aoSalvar({
      nome,
      email,
      cpf,
      disciplina,
      data_admissao: dataAdmissao,
    });
    setNome("");
    setEmail("");
    setCpf("");
    setDisciplina("");
    setDataAdmissao("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <CampoTexto
        label="Nome"
        valor={nome}
        aoAlterar={(v) => setNome(v)}
        obrigatorio
      />
      <CampoTexto
        label="E-mail"
        tipo="email"
        valor={email}
        aoAlterar={(v) => setEmail(v)}
        obrigatorio
      />
      <CampoTexto
        label="CPF"
        valor={cpf}
        aoAlterar={(v) => setCpf(v)}
        obrigatorio
      />
      <CampoTexto
        label="Disciplina"
        valor={disciplina}
        aoAlterar={(v) => setDisciplina(v)}
        obrigatorio
      />
      <CampoTexto
        label="Data de Admissão"
        tipo="date"
        valor={dataAdmissao}
        aoAlterar={(v) => setDataAdmissao(v)}
        obrigatorio
      />
      <button type="submit">Cadastrar Professor</button>
    </form>
  );
}

export default FormularioProfessor;