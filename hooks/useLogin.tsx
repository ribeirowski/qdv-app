import { signIn } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchema } from "@/validations/login";

async function loginUser(data: LoginSchema) {
  const res = await signIn("credentials", {
    email: data.email,
    password: data.password,
    redirect: false,
  });

  if (!res?.ok) {
    throw new Error("Email ou senha incorretos.");
  }

  return res;
}

export function useLogin() {
  const { mutate, isPending } = useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      console.log("Usuário logado com sucesso.");
    },
  });

  const { register, handleSubmit, formState: { errors } } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  function onSubmit(data: LoginSchema) {
    mutate(data);
  }

  return { register, handleSubmit, onSubmit, errors, isPending };
}
