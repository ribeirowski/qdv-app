"use client";

import { LoginForm } from "@/components/molecules/login-form";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full max-w-md">
      <Button
        onClick={() => router.push("/")}
        variant="ghost"
        className="flex items-center w-full pb-6 text-sm text-white hover:bg-transparent focus:bg-transparent active:bg-transparent"
      >
        Voltar para a página inicial
      </Button>
      <LoginForm />
    </div>
  );
}
