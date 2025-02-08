-- CreateTable
CREATE TABLE "Preparo" (
    "id" TEXT NOT NULL,
    "mestrePreparo" TEXT NOT NULL,
    "mestreAuxiliar" TEXT NOT NULL,
    "nucleo" TEXT NOT NULL,
    "observacao" TEXT,
    "data" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Preparo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Apuro" (
    "id" TEXT NOT NULL,
    "preparoId" TEXT NOT NULL,
    "mariri" TEXT NOT NULL,
    "chacrona" TEXT,
    "quantidadeLitro" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Apuro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vidro" (
    "id" TEXT NOT NULL,
    "apuroId" TEXT NOT NULL,
    "quantidadeLitro" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'disponivel',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "retornoId" TEXT,

    CONSTRAINT "Vidro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sessao" (
    "id" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sessao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Retorno" (
    "id" TEXT NOT NULL,
    "sessaoId" TEXT NOT NULL,
    "quantidadeRetorno" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Retorno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_VidroSessao" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_VidroSessao_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Retorno_sessaoId_key" ON "Retorno"("sessaoId");

-- CreateIndex
CREATE INDEX "_VidroSessao_B_index" ON "_VidroSessao"("B");

-- AddForeignKey
ALTER TABLE "Apuro" ADD CONSTRAINT "Apuro_preparoId_fkey" FOREIGN KEY ("preparoId") REFERENCES "Preparo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vidro" ADD CONSTRAINT "Vidro_apuroId_fkey" FOREIGN KEY ("apuroId") REFERENCES "Apuro"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vidro" ADD CONSTRAINT "Vidro_retornoId_fkey" FOREIGN KEY ("retornoId") REFERENCES "Retorno"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Retorno" ADD CONSTRAINT "Retorno_sessaoId_fkey" FOREIGN KEY ("sessaoId") REFERENCES "Sessao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_VidroSessao" ADD CONSTRAINT "_VidroSessao_A_fkey" FOREIGN KEY ("A") REFERENCES "Sessao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_VidroSessao" ADD CONSTRAINT "_VidroSessao_B_fkey" FOREIGN KEY ("B") REFERENCES "Vidro"("id") ON DELETE CASCADE ON UPDATE CASCADE;
