// import React, { useState } from 'react';
// import './style.css';
// import  { Axios } from "axios";
// // import api from './api';
// // import { Link } from 'react-router-dom'


//   function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [nome, setNome] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const user = { nome, email, password };
//     // await api.post  ('/users', user);
//     setNome('');
//     setEmail('');
//     setPassword('');
//     alert('Usuário cadastrado com sucesso!');
//   };
  


//   return (
//     <div className="login">
//       <h2>Faça seu Cadastro!</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Nome:
//           <input type="name" placeholder = "Insira o seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input type="email" placeholder = "Insira o seu email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Senha:
//           <input type="password" placeholder = "Insira sua senha" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </label>
//         <br />
//         <button onClick={handleSubmit}>Enviar</button>
//       </form>
//     </div>
//   );
// }

// export default Login;
import React, { useState } from "react";
import { useMutation } from "react-query";
import './style.css';



const Login = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const LoginUser = useMutation(async (data) => {
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    LoginUser.mutate({ nome, email, senha });
    setNome("");
    setEmail("");
    setSenha("");
  };

  return (
    <div className="login"> 
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Senha:
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </label>
      <button type="submit">Cadastrar</button>
    </form>
    </div>
  );
};

export default Login;
