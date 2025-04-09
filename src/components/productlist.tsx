import { Button } from "@/components/ui/button";
import { Table, TableHead, TableHeader, TableBody, TableRow, TableCell, TableCaption } from "@/components/ui/table";

import mockProducts from "@/mock/products";
import ProductRow from "@/components/productrow";

export default function ProductList() {
  return (
    <>
      <Button className="my-6">Novo</Button>
      <Table className="w-full border border-gray-200 rounded-lg shadow-sm">
        <TableCaption>Lista de produtos cadastrados.</TableCaption>
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead className="px-4 py-2 text-left text-black font-semibold">Nome</TableHead>
            <TableHead className="px-4 py-2 text-left text-black font-semibold">Valor</TableHead>
            <TableHead className="px-4 py-2 text-right text-black font-semibold">Ação</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockProducts.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </TableBody>
      </Table>
    </>
  )
}