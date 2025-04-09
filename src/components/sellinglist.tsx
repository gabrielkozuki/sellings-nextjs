import { Button } from "@/components/ui/button";
import { Table, TableHead, TableHeader, TableBody, TableRow, TableCaption } from "@/components/ui/table";

import mockSellings from "@/mock/sellings";
import SellingRow from "@/components/sellingrow";

export default function SellingList() {
  return (
    <>
      <Button className="my-6">Novo</Button>
      <Table className="w-full border border-gray-200 rounded-lg shadow-sm">
        <TableCaption>Lista de vendas cadastradas.</TableCaption>
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead className="px-4 py-2 text-left text-black font-semibold">Nome</TableHead>
            <TableHead className="px-4 py-2 text-left text-black font-semibold">Valor</TableHead>
            <TableHead className="px-4 py-2 text-right text-black font-semibold">Ação</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockSellings.map((selling) => (
            <SellingRow key={selling.id} selling={selling} />
          ))}
        </TableBody>
      </Table>
    </>
  )
}