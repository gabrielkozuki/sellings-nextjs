"use client";

import { Button } from "@/components/ui/button";
import { useNavigation } from "@/hooks/usenavigation";
import { ChevronRight } from "lucide-react"

export default function CreateSelling() {
  const { navigateBack } = useNavigation();

  return (
    <div className="container mx-auto p-4 mt-6 max-w-4xl">
      <div className="flex flex-row justify-between mb-4 items-center">
        <h1 className="text-3xl font-bold text-black-700 mb-2">Criar venda</h1>
        <Button onClick={() => navigateBack()} variant="link"><ChevronRight /> Voltar</Button>
      </div>
    </div>
  )
}