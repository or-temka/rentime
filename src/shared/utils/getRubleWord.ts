/**
 * Returns the correct form of the Russian word "рубль" (ruble) based on the given number.
 *
 * Rules:
 * - 1 → "рубль"
 * - 2–4 → "рубля"
 * - 5–20 → "рублей"
 * - Applies modulo rules for numbers greater than 20.
 *
 * @param value - The numeric value to determine the correct word form for.
 * @returns The correct form of "рубль" ("рубль", "рубля", or "рублей").
 *
 * @example
 * getRubleWord(1);   // "рубль"
 * getRubleWord(2);   // "рубля"
 * getRubleWord(5);   // "рублей"
 * getRubleWord(21);  // "рубль"
 */
export function getRubleWord(value: number): string {
  const absValue = Math.abs(value) % 100
  const lastDigit = absValue % 10

  if (absValue > 10 && absValue < 20) return 'рублей'
  if (lastDigit > 1 && lastDigit < 5) return 'рубля'
  if (lastDigit === 1) return 'рубль'
  return 'рублей'
}
