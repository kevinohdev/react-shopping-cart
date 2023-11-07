const formatter = Intl.NumberFormat(undefined, {
  currency: 'USD',
})

export function formatPrice(cents: number) {
  return (formatter.format(cents / 100));
}