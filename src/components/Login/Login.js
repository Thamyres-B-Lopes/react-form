import React, { useState } from 'react';
import './style.css';
import  { Axios } from "axios";
// import api from './api';
// import { Link } from 'react-router-dom'


  function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = { nome, email, password };
    // await api.post  ('/users', user);
    setNome('');
    setEmail('');
    setPassword('');
    alert('Usuário cadastrado com sucesso!');
  };
  


  return (
    <div className="login">
      <h2>Faça seu Cadastro!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="name" placeholder = "Insira o seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" placeholder = "Insira o seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Senha:
          <input type="password" placeholder = "Insira sua senha" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button onClick={handleSubmit}>Enviar</button>
      </form>
    </div>
  );
}

export default Login;
