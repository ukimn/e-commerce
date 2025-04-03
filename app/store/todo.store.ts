// zustand Store

import { create } from "zustand";
import { ProductsCartStore } from "@/lib/types";
import { persist } from "zustand/middleware";

export const useCartStore = create<ProductsCartStore>()(
  persist(
    (set) => ({
      ChoosedProduct: [],

      addProduct: (product) =>
        set((state) => ({
          ChoosedProduct: [...state.ChoosedProduct, product],
        })),

      removeProduct: (id) =>
        set((state) => {
          const newProducts = state.ChoosedProduct.filter(
            (product) => product.id !== id
          );
          return { ChoosedProduct: newProducts };
        }),

      clearCart: () => set(() => ({ ChoosedProduct: [] })),
    }),
    {
      name: "cart-storage"
    }
  )
);
