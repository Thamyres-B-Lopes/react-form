import React, { useState } from 'react';
import './style.css';
// import { Link } from 'react-router-dom';

  function CadastroAnimais() {
  const [nome, setNome] = useState('');
  const [raca, setRaca] = useState('');
  const [vacina, setVacina] = useState('não');
  const [castracao, setCastracao] = useState('não');
  const [cep, setCep] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('');
  const [porte, setPorte] = useState('');
  const [descricao, setDescricao] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // validar entradas
    if (!nome || !raca || !cep || !idade || !sexo || !porte || !email || !telefone) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    // enviar dados de cadastro para o servidor
  }

  return (

    <div className="cadastro-container">
      <h2>Cadastro de Animais</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Adicionar Foto:</label>
          <input type="file" accept="image/*" />
        </div>
        <div className="form-group">
          <label>Nome:</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Raça:</label>
          <input type="text" value={raca} onChange={(e) => setRaca(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Vacinação:</label>
          <select value={vacina} onChange={(e) => setVacina(e.target.value)}>
            <option value="sim">Sim</option>
            <option value="não">Não</option>
          </select>
        </div>

        <div className="form-group">
          <label>Castração:</label>
          <select value={castracao} onChange={(e) => setCastracao(e.target.value)}>
            <option value="sim">Sim</option>
            <option value="não">Não</option>
          </select>
        </div>
        <div className="form-group">
          <label>Porte:</label>
          <select value={porte} onChange={(e) => setPorte(e.target.value)}>
            <option value="pequeno">Pequeno</option>
            <option value="medio">Médio</option>
            <option value="grande">Grande</option>
          </select>
        </div>

        <div className="form-group">
          <label>Sexo:</label>
          <select value={sexo} onChange={(e) => setSexo(e.target.value)}>
            <option value="macho">Macho</option>
            <option value="femea">Fêmea</option>
          </select>
        </div>

        <div className="form-group">
          <label>CEP:</label>
          <input type="number" value={cep} onChange={(e) => setCep(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Idade:</label>
          <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)} />
        </div>

        <div>
          <label>Descrição:</label>
          {/* <textarea name="descricao"></textarea> */}
          <textarea type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
        </div>



        <div className="form-group">
          <label>Telefone:</label>
          <input type="number" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <br />

        <br />
        <button type="submit">Cadastrar</button>

      </form>
      {/* <p>Já tem uma conta? <Link to="/">Faça login aqui.</Link></p> */}
    </div>
  );
}
   export default CadastroAnimais;
  