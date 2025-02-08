"use client";

import { useLogin } from "@/hooks/useLogin";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Logo from "@/assets/logoH_green.svg";

export function LoginForm() {
  const { register, handleSubmit, onSubmit, errors, isPending } = useLogin();

  return (
    <Card className="w-full max-w-md mx-auto px-3 py-2">
      <CardHeader> 
        <div className="flex justify-center pt-3 pb-6">
          <Image src={Logo} alt="Logo" />
        </div>
        <CardTitle>Entrar</CardTitle>
        <CardDescription>Faça login para acessar sua conta</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...register("email")} placeholder="seu@email.com" />
            {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
          </div>

          <div className="space-y-1 pb-3">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" {...register("password")} placeholder="Digite sua senha" />
            {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
          </div>

          <Button type="submit" className="w-full font-bold" disabled={isPending}>
            {isPending ? "Entrando..." : "Entrar"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
