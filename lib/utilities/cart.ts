export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("en-PH", {
    minimumFractionDigits: 2,
  }).format(amount);
};
