import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type Props = {
  buttonLabel: string,
  onSubmit: (name: string, price: string) => void,
}

export default function SellingForm({ buttonLabel, onSubmit }: Props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const clearFields = () => {
    setName("");
    setPrice("");
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="name">Nome</Label>
        <Input type="text" id="name" placeholder="..." value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="price">Preço</Label>
        <Input type="text" id="price" placeholder="R$ 0,00" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div className="flex flex-row mt-4 justify-between max-w-sm">
        <Button className="max-w-sm" onClick={clearFields} variant="secondary">Limpar</Button>
        <Button className="max-w-sm" onClick={() => onSubmit(name, price)}>{buttonLabel}</Button>
      </div>
    </div>
  )
}