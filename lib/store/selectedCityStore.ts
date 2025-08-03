import { create } from "zustand";
import { cityShippingFees } from "../variables/metroManilaProvinces";

type selectedCity = {
  city: string;
  shippingFee: number;
};

type SelectedCityState = {
  selectedCityState: selectedCity;
  setSelectedCity: (data: Omit<selectedCity, "shippingFee">) => void;
  clearSelectedCity: () => void;
};

export const useCityStore = create<SelectedCityState>((set) => ({
  selectedCityState: {
    city: "",
    shippingFee: 0,
  },
  setSelectedCity: (data) =>
    set(() => {
      const selectedCity = data.city;
      const shippingFee = cityShippingFees[selectedCity] || 100;

      return {
        selectedCityState: {
          city: data.city,
          shippingFee,
        },
      };
    }),
  clearSelectedCity: () =>
    set(() => ({
      selectedCityState: {
        city: "",
        shippingFee: 0,
      },
    })),
}));
