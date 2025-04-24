"use client";

import { Button } from "@/components/ui/button";
import { useNavigation } from "@/hooks/usenavigation";
import { ChevronRight } from "lucide-react"
import { toast } from "sonner";

import { useSelling } from "@/context/sellingcontext";
import SellingForm from "@/components/sellingform";
import type { Selling } from "@/lib/types";

export default function CreateSelling() {
  const { navigateBack } = useNavigation();
  const { createSelling } = useSelling();

  const handleSubmit = (name: string, price: number) => {
    if (name !== "" && price !== 0) {
      const result = createSelling({ name, price } as Selling);
      
      if (result) {
        toast.success("Venda criada com sucesso!");
        navigateBack();
      } else {
        toast.error("Erro ao criar venda.");
      }

    } else {
      toast.error("Preencha todos os campos.");
    }
  }

  return (
    <div className="container mx-auto p-4 mt-6 max-w-4xl">
      <div className="flex flex-row justify-between mb-4 items-center">
        <h1 className="text-3xl font-bold text-black-700 mb-6">Criar venda</h1>
        <Button onClick={() => navigateBack()} variant="link"><ChevronRight /> Voltar</Button>
      </div>
      <SellingForm buttonLabel="Salvar" onSubmit={handleSubmit} />
    </div>
  )
}