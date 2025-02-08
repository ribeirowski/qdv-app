import { z } from "zod";

export const cadastroSchema = z.object({
  responsavel: z.string().min(1, "Responsável deve ter pelo menos 1 caractere"),
  nucleo: z.string().min(1, "Núcleo deve ter pelo menos 1 caractere"),
  email: z.string().email("Email inválido"),
  password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres"),
  role: z.string().default("user"),
  username: z.string().min(1, "Username deve ter pelo menos 1 caractere"),
});

export type CadastroSchema = z.infer<typeof cadastroSchema>;
