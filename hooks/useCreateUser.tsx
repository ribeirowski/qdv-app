import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CadastroSchema } from "@/validations/cadastro";

async function createUser(userData: CadastroSchema) {
  const res = await fetch("/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  if (!res.ok) {
    throw new Error("Erro ao cadastrar usuário");
  }

  return res.json();
}

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
}
