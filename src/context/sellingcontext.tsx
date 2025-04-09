"use client";

import { createContext, useContext, useState } from "react";
import mockSellings from "@/mock/sellings";

type Selling = {
  id: number,
  name: string,
  price: string
}

type SellingContextType = {
  sellings: Selling[],
  createSelling: (selling: Selling) => void,
  updateSelling: (selling: Selling) => void,
  deleteSelling: (id: number) => void
}

const SellingContext = createContext<SellingContextType | undefined>(undefined);

export function SellingProvider({ children }: { children: React.ReactNode }) {
  const [sellings, setSellings] = useState<Selling[]>(mockSellings);

  const createSelling = (selling: Selling) => {
    const newSelling = { ...selling, id: sellings.length + 1 };
    setSellings([...sellings, newSelling]);
  }

  const updateSelling = (selling: Selling) => {
    const updatedSellings = sellings.map((sel) => {
      if (sel.id === selling.id) {
        return selling;
      }
      return sel;
    })

    setSellings(updatedSellings);
  }

  const deleteSelling = (id: number) => {
    const updatedSellings = sellings.filter((sel) => {
      return sel.id !== id;
    });

    setSellings(updatedSellings);
  }

  return (
    <SellingContext.Provider value={{ sellings, createSelling, updateSelling, deleteSelling }}>
      {children}
    </SellingContext.Provider>
  );
}

export function useSelling() {
  const context = useContext(SellingContext);

  if (!context) {
    throw new Error("useSelling must be used within a SellingProvider");
  }

  return context;
}