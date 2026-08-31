export function L(value, locale = 'ar') {
  if (value == null) return '';
  if (typeof value === 'string') return value;
  return value[locale] ?? value.ar ?? value.en ?? '';
}
