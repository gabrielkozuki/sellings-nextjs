import { TableRow, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { Pencil } from "lucide-react";
import { DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert-dialog";

import SellingForm from "@/components/sellingform";

type Props = {
  selling: {
    id: number;
    name: string;
    price: string;
  }
}

export default function SellingRow({ selling }: Props) {

  const handleEdit = () => { };

  const handleDelete = () => { };

  return (
    <TableRow key={selling.id} className="hover:bg-gray-50">
      <TableCell className="px-4 py-2 border-t">{selling.name}</TableCell>
      <TableCell className="px-4 py-2 border-t">{selling.price}</TableCell>
      <TableCell className="px-4 py-2 border-t flex gap-6 justify-end">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline"><Pencil /> Editar</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Editar venda</DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <SellingForm buttonLabel="Editar" onSubmit={handleEdit} />
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
              <AlertDialogAction onClick={handleDelete}>Confirmar</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </TableCell>
    </TableRow>
  )
}