"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useLogout } from "@/hooks/useLogout";
import Image from "next/image";
import Logo from "@/assets/logoH_green.svg";
import { CustomCard } from "@/components/atoms/custom-card";
import { useRouter } from "next/navigation";

export default function HomePage() {
    const { user } = useAuth();
    const { logout, isPending } = useLogout();
    const router = useRouter();

    const handleSelectCard = (url: string) => {
        router.push(url);
    };

    return (
        <div className="flex flex-col w-full max-w-md justify-center items-center">
            <div className="flex justify-center pb-10 pt-12">
                <Image src={Logo} alt="Logo" />
            </div>
            <h1 className="text-md text-primary font-bold pb-6">Núcleo {user?.nucleo}</h1>
            <div className="w-full px-4 space-y-4">
                <CustomCard 
                    variant="report" 
                    title="Relatório de Estoque" 
                    qtdLitro={171.6} 
                    qtdVidro={52} 
                    onClick={() => handleSelectCard("/estoque")} 
                />
                <CustomCard title="Preparo" onClick={() => handleSelectCard("/preparo")} />
                <CustomCard title="Consumo" onClick={() => handleSelectCard("/consumo")} />
                <CustomCard title="Resumo" onClick={() => handleSelectCard("/resumo")} />
            </div>
            <div className="flex flex-col mt-10">
                <Button variant={"default"} onClick={() => logout()} disabled={isPending} className="px-6">
                    {isPending ? "Saindo..." : "Sair"}
                </Button>
            </div>
        </div>
    );
}
