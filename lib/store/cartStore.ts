import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import { Items } from "../types/checkoutSession";

interface NotEnoughStock {
  productName: string;
  availableStock: number;
  id: string;
}

type CartState = {
  items: { guestId: string | null; items: Items[] };
  addToCart: (data: Items) => void;
  removeTocart: (id: string) => void;
  addQuantity: (id: string) => void;
  minusQuantity: (id: string) => void;
  clearCart: () => void;
  updateCart: (data: NotEnoughStock[]) => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: { guestId: null, items: [] },

      addToCart: (data) =>
        set((state) => {
          if (!state.items.guestId) {
            state.items.guestId = uuidv4();
          }

          const existingItemIndex = state.items.items.findIndex(
            (item) => item.productid === data.productid
          );

          if (existingItemIndex !== -1) {
            const updatedItems = [...state.items.items];
            const item = updatedItems[existingItemIndex];

            item.quantity += data.quantity;
            if (item.quantity > data.maxQuantity) {
              item.quantity = data.maxQuantity;
            }

            return {
              items: { guestId: state.items.guestId, items: updatedItems },
            };
          }

          return {
            items: {
              guestId: state.items.guestId,
              items: [...state.items.items, data],
            },
          };
        }),

      removeTocart: (id) =>
        set((state) => ({
          items: {
            guestId: state.items.guestId,
            items: state.items.items.filter((item) => item.id !== id),
          },
        })),

      addQuantity: (id) =>
        set((state) => {
          const updatedItems = state.items.items.map((item) => {
            if (item.id === id) {
              if (item.quantity >= item.maxQuantity) {
                return item;
              }
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          });
          return {
            items: {
              guestId: state.items.guestId,
              items: updatedItems,
            },
          };
        }),

      minusQuantity: (id) =>
        set((state) => {
          const updatedItems = state.items.items.map((item) => {
            if (item.id === id) {
              if (item.quantity === 1) {
                return item;
              }
              return { ...item, quantity: item.quantity - 1 };
            }
            return item;
          });
          return {
            items: {
              guestId: state.items.guestId,
              items: updatedItems,
            },
          };
        }),

      clearCart: () =>
        set(() => ({
          items: { guestId: null, items: [] },
        })),

      updateCart: (data) => {
        set((state) => {
          const updatedItems = state.items.items.map((item) => {
            const stockInfo = data.find((d) => d.id === item.id);
            if (stockInfo) {
              const newMax = stockInfo.availableStock;
              return {
                ...item,
                maxQuantity: newMax,
                quantity: Math.min(item.quantity, newMax),
              };
            }
            return item;
          });

          return {
            items: {
              guestId: state.items.guestId,
              items: updatedItems,
            },
          };
        });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
