import FormularioProfessor from "../components/FormularioProfessor";

function PaginaCadastroProfessor({ aoCadastrar }) {
  return (
    <main>
      <h2>Cadastrar Professor</h2>
      <FormularioProfessor aoSalvar={aoCadastrar} />
    </main>
  );
}

export default PaginaCadastroProfessor;