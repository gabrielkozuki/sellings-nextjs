import { TableRow, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { Pencil } from "lucide-react";
import { DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert-dialog";
import { useState } from "react";

import SellingForm from "@/components/sellingform";
import { useSelling } from "@/context/sellingcontext";
import { toast } from "sonner";
import type { Selling } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";

type Props = {
  selling: Selling
}

export default function SellingRow({ selling }: Props) {
  const { updateSelling, deleteSelling } = useSelling();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleEdit = (name: string, price: number) => {
    if (name !== "" && price !== 0) {
      const result = updateSelling({ id: selling.id, name, price } as Selling);

      if (result) {
        toast.success("Venda atualizada com sucesso!");
        setIsDialogOpen(false);
      } else {
        toast.error("Erro ao atualizar venda.");
      }
    } else {
      toast.error("Preencha todos os campos.");
    }
  };

  const handleDelete = (id: number | undefined) => {
    if (id === undefined) {
      toast.error("Erro ao deletar venda.");
      return;
    }

    const result = deleteSelling(id);

    if (result) {
      toast.success("Venda deletada com sucesso!");
    } else {
      toast.error("Erro ao deletar venda.");
    }
  };

  return (
    <TableRow key={selling.id} className="hover:bg-gray-50">
      <TableCell className="px-4 py-2 border-t">{selling.name}</TableCell>
      <TableCell className="px-4 py-2 border-t">{formatCurrency(selling.price.toFixed(2))}</TableCell>
      <TableCell className="px-4 py-2 border-t flex gap-6 justify-end">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" onClick={() => setIsDialogOpen(true)}><Pencil /> Editar</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Editar venda</DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <SellingForm data={selling} buttonLabel="Editar" onSubmit={handleEdit} />
          </DialogContent>
        </Dialog>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="link" className="text-red-600">Deletar</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Confirmar ação</AlertDialogTitle>
              <AlertDialogDescription>
                Você tem certeza que deseja deletar a venda <strong>{selling.name}</strong>? Esta ação não pode ser desfeita.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={() => handleDelete(selling.id)}>Confirmar</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </TableCell>
    </TableRow>
  )
}