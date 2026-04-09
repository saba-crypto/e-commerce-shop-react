export function formatCurrency(priceCents: number) {
  if (priceCents < 0) {
    priceCents = priceCents * -1;
    return `-$${(priceCents / 100).toFixed(2)}`;
  } else {
    return `$${(priceCents / 100).toFixed(2)}`;
  }
}
