import ProductList from "@/components/productlist";

export default function Page() {
  return (
    <div className="container mx-auto p-4 mt-6 max-w-4xl">
      <h1 className="text-3xl text-black-700 font-bold mb-2 ">Listagem de Vendas</h1>
      <p className="mb-4">Gerencie seus produtos com facilidade e praticidade</p>
      <ProductList />
    </div>
  )
}