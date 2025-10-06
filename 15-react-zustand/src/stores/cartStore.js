import {create} from "zustand";

export const useCart = create((set) => ({
    cartCount: 0,
    addToCart: () => set((state) => ({cartCount: state.cartCount + 1})),
}));