function CardProfessor(props) {
  const professor = props.professor;

  return (
    <div className="card-aluno">
      <h3>{professor.nome}</h3>
      <p>{professor.email}</p>
      <p>CPF: {professor.cpf}</p>
      <p>Disciplina: {professor.disciplina}</p>
      <p>Admissão: {professor.data_admissao}</p>
      <button
        className="btn-excluir"
        onClick={function () {
          props.aoExcluir(professor.id);
        }}
      >
        Excluir
      </button>
    </div>
  );
}

export default CardProfessor;