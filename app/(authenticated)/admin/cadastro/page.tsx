"use client";

import CadastroForm from "@/components/molecules/cadastro-form"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function CadastroPage() {
  const router = useRouter();
  return (
    <div className="flex flex-col w-full max-w-md">
      <Button
        onClick={() => router.push("/admin")}
        variant="ghost"
        className="flex items-center w-full pb-4 text-sm text-white hover:bg-transparent focus:bg-transparent active:bg-transparent"
      >
        Voltar para a página inicial
      </Button>
      <CadastroForm />
    </div>
  );
}
