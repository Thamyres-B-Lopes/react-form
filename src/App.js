// import React from 'react';
import CadastroAnimais from './components/Cadastro/CadastroAnimais';
// import Login from './components/Login/Login';



import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Login/> */}
    <CadastroAnimais />
    </QueryClientProvider>
  );
}export default App;