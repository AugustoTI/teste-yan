export const CurrencyConverter = (currency) => {
  return currency.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};
