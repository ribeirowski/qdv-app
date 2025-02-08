import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cadastroSchema, CadastroSchema } from "@/validations/cadastro";
import { useCreateUser } from "@/hooks/useCreateUser";
import { useRouter } from "next/navigation";

export function useCadastro() {
  const { mutate, isPending } = useCreateUser();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<CadastroSchema>({
    resolver: zodResolver(cadastroSchema),
  });

  const router = useRouter();

  function onSubmit(data: CadastroSchema) {
    mutate(data, {
      onSuccess: () => {
        alert("Usuário cadastrado com sucesso!");
        reset();
        router.push("/");
      },
      onError: (error) => {
        alert(error.message || "Erro ao cadastrar usuário.");
        reset();
      },
    });
  }

  return { register, handleSubmit, onSubmit, errors, isPending };
}
