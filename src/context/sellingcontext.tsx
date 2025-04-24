"use client";

import { createContext, useContext, useState } from "react";
import mockSellings from "@/mock/sellings";
import type { Selling } from "@/lib/types";

type SellingContextType = {
  sellings: Selling[],
  createSelling: (selling: Selling) => boolean,
  updateSelling: (selling: Selling) => boolean,
  deleteSelling: (id: number) => boolean
}

const SellingContext = createContext<SellingContextType | undefined>(undefined);

export function SellingProvider({ children }: { children: React.ReactNode }) {
  const [sellings, setSellings] = useState<Selling[]>(mockSellings);

  const createSelling = (selling: Selling) => {
    try {
      const newSelling = { ...selling, id: sellings.length + 1 };
      setSellings([...sellings, newSelling]);
      return true;

    } catch (err) {
      console.log(err);
      return false;
    }
  }

  const updateSelling = (selling: Selling) => {
    try {
      const updatedSellings = sellings.map((sel) => {
        if (sel.id === selling.id) {
          return selling;
        }
        return sel;
      })
  
      setSellings(updatedSellings);
      return true;

    } catch (err) {
      console.log(err);
      return false;
    }
  }

  const deleteSelling = (id: number) => {
    try {
      const updatedSellings = sellings.filter((sel) => {
        return sel.id !== id;
      });
  
      setSellings(updatedSellings);
      return true;

    } catch (err) {
      console.log(err);
      return false;
    }
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
    throw new Error("useSelling precisa estar contido em um SellingProvider");
  }

  return context;
}