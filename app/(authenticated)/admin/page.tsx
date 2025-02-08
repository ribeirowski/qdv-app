"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useLogout } from "@/hooks/useLogout";
import { useRouter } from "next/navigation";

export default function HomePage() {
    const { logout, isPending } = useLogout();
    const { user } = useAuth();
    const router = useRouter();

    return (
        <div className="flex flex-col w-full max-w-md justify-center items-center">
            <h1 className="text-3xl font-bold text-center">Home do {user?.role}</h1>
            <p className="text-center mb-4">Welcome to the home page, {user?.responsavel}!</p>
            <div className="flex flex-col space-y-2">
                <Button variant={"secondary"} onClick={() => router.push("/admin/cadastro")} className="px-6">  
                    Cadastrar Núcleo
                </Button>
                <Button variant={"secondary"} onClick={() => logout()} disabled={isPending} className="px-6">
                    {isPending ? "Saindo..." : "Sair"}
                </Button>
            </div>
        </div>
    );
}