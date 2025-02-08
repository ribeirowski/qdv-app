"use client";

import Image from "next/image";
import Logo from "@/assets/logoV_green.svg";
import Check from "@/assets/check.svg";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen items-center justify-center px-12 bg-white w-full">
      <div className="flex flex-col w-full max-w-lg text-center items-center justify-center bg-white">
        <div className="flex justify-center">
          <Image src={Logo} alt="Logo do Quarto do Vegetal" />
        </div>
        <p className="text-md md:text-xl lg:text-xl text-gray-600 mt-10 font-bold">
          Uma nova forma de administrar o Quarto do Vegetal do seu Núcleo.
        </p>

        <div className="flex flex-col space-y-4 mt-16">
          <div className="flex items-center gap-4 w-full">
            <Image src={Check} alt="Check" className="w-6 h-6 flex-shrink-0" />
            <span className="text-lg text-gray-700">Cadastre o vegetal preparado</span>
          </div>

          <div className="flex items-center gap-4 w-full">
            <Image src={Check} alt="Check" className="w-6 h-6 flex-shrink-0" />
            <span className="text-lg text-gray-700">Administre as saídas de vegetal</span>
          </div>

          <div className="flex items-center gap-4 w-full">
            <Image src={Check} alt="Check" className="w-6 h-6 flex-shrink-0" />
            <span className="text-lg text-gray-700">Registre os retornos das sessões</span>
          </div>
        </div>

        <div className="mt-12">
        <Button className="px-12 font-bold text-md" onClick={() => router.push("/sign-in")}>
          Entrar
        </Button>
        </div>
      </div>
    </div>
  );
}
