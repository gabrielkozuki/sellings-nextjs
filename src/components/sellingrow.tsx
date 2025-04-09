import { TableRow, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

type Props = {
    selling: {
        id: number;
        name: string;
        price: string;
    }
}

export default function SellingRow({ selling }: Props) {
    return (
        <TableRow className="hover:bg-gray-50">
            <TableCell className="px-4 py-2 border-t">{selling.name}</TableCell>
            <TableCell className="px-4 py-2 border-t">{selling.price}</TableCell>
            <TableCell className="px-4 py-2 border-t flex gap-6 justify-end">
            <Button variant="outline"><Pencil /> Editar</Button>
            <Button variant="link" className="text-red-600">Deletar</Button>
            </TableCell>
        </TableRow>
    )
}