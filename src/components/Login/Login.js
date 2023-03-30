import React, { useState } from 'react';
import './style.css';
// import { Link } from 'react-router-dom'

  function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@') || password.length < 6) {
      alert('Por favor, insira um email válido e uma senha com pelo menos 6 caracteres.');
      return;
    }
    // enviar dados de login para o servidor
  };

  return (
    <div className="login">
      <h2>Faça seu Cadastro!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Senha:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
      {/* <p>Não tem conta? <Link to="/cadastro">Cadastre-se aqui.</Link></p> */}
    </div>
  );
}

export default Login;
