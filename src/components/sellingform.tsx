import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";

import type { Selling } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";

type Props = {
  data?: Selling | undefined,
  buttonLabel: string,
  onSubmit: (name: string, price: number) => void,
}

export default function SellingForm({ data, buttonLabel, onSubmit }: Props) {
  const [name, setName] = useState(data ? data.name : "");
  const [price, setPrice] = useState(data ? data.price : 0);

  const clearFields = () => {
    setName("");
    setPrice(0);
  };

  const handlePriceChange = (inputPrice: string) => {
    const rawValue = inputPrice.replace(/[^\d]/g, ""); // RegEx: remove caracteres não numéricos
    const formattedValue = parseFloat(rawValue) / 100;
    setPrice(formattedValue);
    console.log(formattedValue);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="name">Nome</Label>
        <Input type="text" id="name" placeholder="..." value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="price">Preço</Label>
        <Input type="text" id="price" value={formatCurrency(price.toFixed(2))} onChange={(e) => handlePriceChange(e.target.value)} />
      </div>
      <div className="flex flex-row mt-4 justify-end gap-4">
        <Button className="max-w-sm" onClick={clearFields} variant="secondary">Limpar</Button>
        <Button className="max-w-sm" onClick={() => onSubmit(name, price)}>{buttonLabel}</Button>
      </div>
    </div>
  )
}