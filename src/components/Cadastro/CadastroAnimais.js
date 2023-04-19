import React, { useState } from "react";
import "./style.css";
// import { Link } from 'react-router-dom';
// import api from './api';

 

function CadastroAnimais() {
  const [nome, setNome] = useState("");
  const [raca, setRaca] = useState("");
  const [vacina, setVacina] = useState("não");
  const [castracao, setCastracao] = useState("não");
  const [cep, setCep] = useState("");
  const [idade, setIdade] = useState("");
  const [sexo, setSexo] = useState("");
  const [porte, setPorte] = useState("");
  const [descricao, setDescricao] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [imagem, setImagem] = useState(null);


  const handleSubmit = async (event) => {
    event.preventDefault();
    const pet = { nome, email,raca,vacina,castracao,cep,idade,sexo,porte,descricao,telefone, imagem };
    // await api.post  ('/users', user);
    setNome('');
    setEmail('');
    setVacina('');
    setCastracao('');
    setCep('');
    setIdade('');
    setSexo('');
    setPorte('');
    setDescricao('');
    setTelefone('');
    setImagem ('');

    alert('Animal cadastrado com sucesso!');
  };

  const handleImageChange = (event) => {
    setImagem(event.target.files[0]);
  };

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   // validar entradas
    
  //   if (
  //     !nome ||
  //     !raca ||
  //     !cep ||
  //     !idade ||
  //     !sexo ||
  //     !porte ||
  //     !email ||
  //     !telefone ||
  //     !vacina ||
  //     !castracao 
  //   ) {
  //     alert("Por favor, preencha todos os campos obrigatórios.");
  //     return;
  //   }
  //   // enviar dados de cadastro para o servidor
  // }

  return (
    <div className="cadastro">
      <h2>Cadastro de Animais</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Adicione sua foto:</label>
          <input className="picture"
           type="file" 
           accept="image/*" 
           value={imagem}
           onChange={handleImageChange} 
           />
           
        </div>
        <div className="form-group">
          <label>Nome:</label>
          <input
            type="text"
            placeholder = "Insira o nome do animal" 
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Raça:</label>
          <input
            type="text"
            placeholder = "Insira a raça"
            value={raca}
            onChange={(e) => setRaca(e.target.value)}
          />
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
          <select
            value={castracao}
            onChange={(e) => setCastracao(e.target.value)}
          >
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
          <input
            type="number"
            placeholder = "Insira o cep"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Idade:</label>
          <input
            type="number"
            placeholder = "Insira a idade"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
        </div>

        <div>
          <label>Descrição: </label>
         
          <textarea
            type="text"
            placeholder = "Insira uma breve descrição do animal"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
          
        </div>
        <div className="form-group">
          <label>Telefone:</label>
          <input
            type="number"
            placeholder = "Insira um telefone"

            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}

          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder = "Insira um email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />

        <br />
        <button type="submit" >Cadastrar</button>
      </form>
      {/* <p>Já tem uma conta? <Link to="/">Faça login aqui.</Link></p> */}
    </div>
  );
}
export default CadastroAnimais;
