export const LoginUser = async (data) => {
  const response = await fetch("/api/cadastro", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Ocorreu um erro ao cadastrar o usuário.");
  }

  return response.json();
};

